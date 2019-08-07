using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JohnRowley.Instrumentation.Services;
using System.IO;

namespace JohnRowley.Instrumentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvatarsController : ControllerBase
    {
        private IBlobStore _blobStore;
        private IAccountsService _accountsService;

        public AvatarsController(Services.IBlobStore blobStore, Services.IAccountsService accountsService) {
            this._blobStore = blobStore;
            this._accountsService = accountsService;
        }

        // GET api/avatars
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(string id)
        {
            Microsoft.Extensions.Primitives.StringValues headerValues;
            if (Request.Headers.TryGetValue("Authorization", out headerValues)) {
                string token = headerValues.First();
            }


            // var authorized = this._accountsService.Validate()

            var avatar = await this._blobStore.GetAvatar(id);
            return new FileStreamResult(avatar, "image/png");
        }

        // PUT api/avatars/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
