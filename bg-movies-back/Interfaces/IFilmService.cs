using bg_movies.Model;

namespace bg_movies.Interfaces
{
    public interface IFilmService
    {
        //Task<List<Movie>> GetFilmCatalogAsync();
        Task<string> GetFilmCatalogAsync();
    }
}