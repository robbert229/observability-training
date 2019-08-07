using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using JohnRowley.Instrumentation.Services;
using Amazon;
using Amazon.S3;
using Grpc;
using Grpc.Core;
using OpenTracing;
using OpenTracing.Contrib.NetCore.CoreFx;
using OpenTracing.Util;

namespace JohnRowley.Instrumentation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureServices(services => {
                    services.AddOpenTracing();
                    services.AddJaeger();
                    services.AddMinioBlob();
                    services.AddGrpcAccounts();
                });
    }
}

namespace Microsoft.Extensions.DependencyInjection {
    public static class MinioBlobServiceCollectionExtensions {
        

        public static IServiceCollection AddMinioBlob(this IServiceCollection services)
        {
            if (services == null)
                throw new ArgumentNullException(nameof(services));

            var cfg = new AmazonS3Config
            {
                RegionEndpoint = RegionEndpoint.USEast1,
                ServiceURL = "http://localhost:9000",
                ForcePathStyle = true
            };

            var s3Client = new AmazonS3Client("observability_access", "observability_secret", cfg);
            services.AddSingleton<IBlobStore>(new S3BlobStore(s3Client));
            
            return services;
        }
    }

    public static class AccountsGrpcClientServiceCollectionExtensions {

        public static IServiceCollection AddGrpcAccounts(this IServiceCollection services) 
        {
            if (services == null) {
                throw new ArgumentNullException(nameof(services));
            }

            //var tracer = services.GetService<ITracer>();
            //var tracingInterceptor = new ClientTracingInterceptor(tracer);

            var channel = new Channel("localhost:4999", ChannelCredentials.Insecure);
            var client = new Accounts.AccountsClient(channel);

            services.AddSingleton<IAccountsService>(new AccountsGrpcClient(client));

            return services;
        }
    }

    public static class JaegerServiceCollectionExtensions {
        private static readonly Uri _jaegerUri = new Uri("http://localhost:14268/api/traces");

        public static IServiceCollection AddJaeger(this IServiceCollection services)
        {
            if (services == null)
                throw new ArgumentNullException(nameof(services));

            services.AddSingleton<ITracer>(serviceProvider =>
            {
                string serviceName = Assembly.GetEntryAssembly().GetName().Name;

                ILoggerFactory loggerFactory = serviceProvider.GetRequiredService<ILoggerFactory>();

                ISampler sampler = new ConstSampler(sample: true);

                ITracer tracer = new Tracer.Builder(serviceName)
                    .WithLoggerFactory(loggerFactory)
                    .WithSampler(sampler)
                    .Build();

                GlobalTracer.Register(tracer);

                return tracer;
            });

            // Prevent endless loops when OpenTracing is tracking HTTP requests to Jaeger.
            services.Configure<HttpHandlerDiagnosticOptions>(options =>
            {
                options.IgnorePatterns.Add(request => _jaegerUri.IsBaseOf(request.RequestUri));
            });

            return services;
        }
    }
}
