using System.Threading.Tasks;
using System.IO;
using Amazon;
using Amazon.S3;

namespace JohnRowley.Instrumentation.Services {
    public interface IBlobStore {
        Task<Stream> GetAvatar(string id);
    }

    public class S3BlobStore : IBlobStore {
        private readonly AmazonS3Client _s3Client;
        private readonly string _avatarsBucket = "avatars";

        public S3BlobStore(AmazonS3Client s3Client) {
            this._s3Client = s3Client;

            var bucketsTask = _s3Client.ListBucketsAsync();
            bucketsTask.Wait();
            var buckets = bucketsTask.Result;

            if (!buckets.Buckets.Exists(bucket => bucket.BucketName == _avatarsBucket))
            {
                var putTask = _s3Client.PutBucketAsync(_avatarsBucket);
                putTask.Wait();
            }
        }

        public async Task<Stream> GetAvatar(string id) {
            var obj = await _s3Client.GetObjectAsync(_avatarsBucket, id);
            return obj.ResponseStream;
        }
    }
}