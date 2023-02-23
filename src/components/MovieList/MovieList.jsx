import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
