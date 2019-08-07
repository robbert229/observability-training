using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Reflection;
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
using Grpc.Core.Interceptors;
using OpenTracing;
using OpenTracing.Contrib.NetCore.CoreFx;
using OpenTracing.Contrib.Grpc.Interceptors;
using OpenTracing.Contrib.Grpc;
using OpenTracing.Util;
using Jaeger;
using Jaeger.Reporters;
using Jaeger.Samplers;
using Prometheus;

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
                    services.AddBlobService();
                    services.AddAccountsService();
                });
    }
}

namespace Microsoft.Extensions.DependencyInjection {
    public static class MinioBlobServiceCollectionExtensions {
        

        public static IServiceCollection AddBlobService(this IServiceCollection services)
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

        public static IServiceCollection AddAccountsService(this IServiceCollection services)
        {
            if (services == null) {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddSingleton<IAccountsService>(serviceProvider =>
            {
                var tracer = serviceProvider.GetRequiredService<ITracer>();
                var tracingInterceptor = new ClientTracingInterceptor
                    .Builder(tracer)
                    .WithStreaming()
                    .WithVerbosity()
                    .Build();

                var channel = new Channel("localhost:4999", ChannelCredentials.Insecure);                
                var invoker = channel.Intercept(tracingInterceptor);
                var client = new Accounts.AccountsClient(invoker);
                
                return new AccountsGrpcClient(client);
            });
            
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
                var serviceName = Assembly.GetEntryAssembly().GetName().Name;
                var loggerFactory = serviceProvider.GetRequiredService<ILoggerFactory>();
                var sampler = new ConstSampler(sample: true);

                var tracer = new Tracer.Builder(serviceName)
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
