using bg_movies.Interfaces;
using bg_movies.Model;
using Microsoft.AspNetCore.Mvc;

namespace bg_movies.Controllers
{
    [ApiController]
    [Route("api/film")]
    public class FilmController : ControllerBase
    {
        private readonly IFilmService _filmService;

        public FilmController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        [HttpGet("catalog")]
        public async Task<IActionResult> GetFilmsCatalog()
        {
            var result = await _filmService.GetFilmCatalogAsync();

            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return StatusCode(500, "Error al obtener el catálogo de películas.");
            }
        }
    }
}
