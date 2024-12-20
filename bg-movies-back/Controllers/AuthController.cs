using bg_movies.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace bg_movies.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet("login")]
        public async Task<IActionResult> Login()
        {
            var result = await _authService.AuthenticateAsync();

            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return StatusCode(500, "Error en la autenticación con TheMovieDB.");
            }
        }

    }
}
