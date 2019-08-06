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
        private IBlobStore blobStore;
        public AvatarsController(Services.IBlobStore blobStore) {
            this.blobStore = blobStore;
        }

        // GET api/avatars
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(string id)
        {
            var avatar = await this.blobStore.GetAvatar(id);
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
