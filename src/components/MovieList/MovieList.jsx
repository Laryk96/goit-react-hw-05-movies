import PropTypes from 'prop-types';

import MovieItem from 'components/MovieItem/MovieItem';
import { PopularMovieList } from './MovieList.styled';
const MovieList = ({ movies }) => {
  return (
    <PopularMovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </PopularMovieList>
  );
};

MovieList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieList;
