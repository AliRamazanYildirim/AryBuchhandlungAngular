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
        [HttpPost]
        public async Task<ActionResult<List<AryBuch>>>ErstelleBuch(AryBuch buch)
        {
            _kontext.AryBücher.Add(buch);
            await _kontext.SaveChangesAsync();

            return Ok(await _kontext.AryBücher.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<AryBuch>>>AktualisiereBuch(AryBuch buch)
        {
            var dbBuch = await _kontext.AryBücher.FindAsync(buch.ID);
            if (dbBuch == null)
                return BadRequest("Kein Buch wurde gefunden.");

            dbBuch.Name = buch.Name;
            dbBuch.Niveau = buch.Niveau;
            dbBuch.Preis = buch.Preis;

            await _kontext.SaveChangesAsync();

            return Ok(await _kontext.AryBücher.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AryBuch>>>LöscheBuch(int id)
        {
            var dbBuch = await _kontext.AryBücher.FindAsync(id);
            if (dbBuch == null)
                return BadRequest("Kein Buch wurde gefunden.");

            _kontext.AryBücher.Remove(dbBuch);
            await _kontext.SaveChangesAsync();

            return Ok(await _kontext.AryBücher.ToListAsync());

        }
    }
}
