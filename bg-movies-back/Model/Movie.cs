namespace bg_movies.Model
{
    public class Movie
    {
        public string PosterPath { get; set; }
        public string Title { get; set; }

        public string Overview { get; set; }

        public DateTime Release { get; set; }

        public double VoteAverage { get; set; }

    }
}
