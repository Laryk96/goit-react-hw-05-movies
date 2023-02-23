const MovieItem = ({ movie }) => {
  return (
    <article>
      <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
      <h2>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h2>
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(({ name }) => name)}</p>
    </article>
  );
};

export default MovieItem;
