using System.Net.Http;
using System.Threading.Tasks;
using bg_movies.Interfaces;
using System;
using bg_movies.Model;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace bg_movies.Services
{
    public class FilmService : IFilmService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;


        public FilmService(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        public async Task<string> GetFilmCatalogAsync()
        {
            string apiKey = _configuration["TheMovieDB:ApiKey"];
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            client.DefaultRequestHeaders.Add("Accept", "application/json");

            var response = await client.GetAsync($"https://api.themoviedb.org/3/movie/popular?api_key={apiKey}");

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
