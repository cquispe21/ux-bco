namespace bg_movies.Model
{
    public class MovieResponse
    {
        public int Page { get; set; }
        public int TotalResults { get; set; }

        public int TotalPages { get; set; }
        public List<Movie> Results { get; set; }

    }
}
