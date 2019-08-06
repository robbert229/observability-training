using System.Threading.Tasks;
using System.IO;
using Amazon;
using Amazon.S3;
using JohnRowley.Instrumentation.Models;

namespace JohnRowley.Instrumentation.Services {
    public interface IAccountsService {
        User GetUserByUsername(string username);
    }
}