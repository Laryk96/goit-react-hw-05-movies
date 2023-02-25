import MovieItem from 'components/MovieItem/MovieItem';
import { useLocation } from 'react-router-dom';

import { PopularMovieList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <PopularMovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} state={location} />
      ))}
    </PopularMovieList>
  );
};

export default MovieList;
