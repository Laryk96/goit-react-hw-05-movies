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

export default MovieList;
