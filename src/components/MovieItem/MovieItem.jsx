import { MovieLinkStyle, PopularMovieItem } from './MovieItem.styled';

const { Link } = require('react-router-dom');

const MovieItem = ({ movie }) => {
  console.log(movie);
  return (
    <PopularMovieItem>
      <MovieLinkStyle to={`movies/${movie.id}`}>
        {movie.title || movie.original_name}
      </MovieLinkStyle>
    </PopularMovieItem>
  );
};

export default MovieItem;
