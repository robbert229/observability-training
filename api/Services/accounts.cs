using System.Threading.Tasks;
using System.IO;
using Amazon;
using Amazon.S3;
using Grpc;
using System.Diagnostics;

namespace JohnRowley.Instrumentation.Services {
    public interface IAccountsService {
        bool Validate(string token);
    }

    public class AccountsGrpcClient : IAccountsService
    {
        private Accounts.AccountsClient _client;
        public AccountsGrpcClient(Accounts.AccountsClient client)
        {
            this._client = client;
        }

        public bool Validate(string token) {
            return _client.Validate(new ValidateRequest{
                Token = token,
            }).Allowed;
        }
    }
}