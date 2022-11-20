using AryBuchhandlungAPI.Daten;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AryBuchhandlungAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AryBuchController : ControllerBase
    {
        private readonly DatenKontext _kontext;

        public AryBuchController(DatenKontext kontext)
        {
            _kontext = kontext;
        }
        [HttpGet]
        public async Task<ActionResult<List<AryBuch>>> GeheZurBücher()
        {
            return Ok(await _kontext.AryBücher.ToListAsync());
        }
    }
}
