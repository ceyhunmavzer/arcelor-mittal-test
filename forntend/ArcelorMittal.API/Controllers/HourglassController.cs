using System.Collections.Generic;
using ArcelorMittal.API.Extensions;
using ArcelorMittal.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace ArcelorMittal.API.Controllers
{
    [ApiController]
    [Route("hourglass")]
    public class HourglassController : ControllerBase
    {
        [HttpPost]
        public IActionResult FimMaxSum([FromBody] Hourglass request)
        {
            var obj = new SumResponse() { };
            obj.Response = request.Data.FindMaxSum();
            return Ok(obj);
        }
        
        
    }
}