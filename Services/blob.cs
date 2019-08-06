using System.Threading.Tasks;
using System.IO;
using Amazon;
using Amazon.S3;

namespace JohnRowley.Instrumentation.Services {
    public interface IBlobStore {
        Task<Stream> GetAvatar(string id);
    }

    public class S3BlobStore : IBlobStore {
        private AmazonS3Client _s3Client;
        public S3BlobStore(AmazonS3Client s3Client) {
            this._s3Client = s3Client;
        }

        public async Task<Stream> GetAvatar(string id) {
            var obj = await this._s3Client.GetObjectAsync("avatars", id);
            return obj.ResponseStream;
        }
    }
}