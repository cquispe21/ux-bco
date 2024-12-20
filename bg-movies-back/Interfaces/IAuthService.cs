namespace bg_movies.Interfaces
{
    public interface IAuthService
    {
        Task<string> AuthenticateAsync();
    }
}
