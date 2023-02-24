import { MovieLinkStyle, PopularMovieItem } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  return (
    <PopularMovieItem>
      <MovieLinkStyle to={`movies/${movie.id}`}>
        {movie.title || movie.original_name}
      </MovieLinkStyle>
    </PopularMovieItem>
  );
};

export default MovieItem;
