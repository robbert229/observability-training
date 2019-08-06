using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using JohnRowley.Instrumentation.Services;
using Amazon;
using Amazon.S3;

namespace JohnRowley.Instrumentation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
            System.Console.Write("Hello World!");
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureServices(services => {
                    services.AddOpenTracing();
                    services.AddJaeger();
                    services.AddMinioBlob();
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
                ServiceURL = "http://johnrowllx3:9000",
                ForcePathStyle = true
            };

            var s3Client = new AmazonS3Client("access", "secret", cfg);
            services.AddSingleton<IBlobStore>(new S3BlobStore(s3Client));
            
            return services;
        }
    }
}
