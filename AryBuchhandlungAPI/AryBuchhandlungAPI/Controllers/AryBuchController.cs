using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AryBuchhandlungAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AryBuchController : ControllerBase
    {
        public AryBuchController()
        {

        }
        [HttpGet]
        public async Task<ActionResult<List<AryBuch>>> GeheZurBücher()
        {
            return new List<AryBuch>
            {
                new AryBuch
                {
                    Name="Aspekte Neu B1 ",
                    Niveau="B1",
                    Preis=29.99m
                }
            };
        }
    }
}
