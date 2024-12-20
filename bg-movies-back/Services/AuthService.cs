using bg_movies.Interfaces;
using System.Net.Http;

namespace bg_movies.Services
{
    public class AuthService : IAuthService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public AuthService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }


        public async Task<string> AuthenticateAsync()
        {
            string token = Environment.GetEnvironmentVariable("TMDB_TOKEN");
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
            client.DefaultRequestHeaders.Add("Accept", "application/json");

            var response = await client.GetAsync(Environment.GetEnvironmentVariable("TMDB_URL_AUTH"));
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsStringAsync();
            }
            else
            {
                return null;
            }
        }
    }
}
