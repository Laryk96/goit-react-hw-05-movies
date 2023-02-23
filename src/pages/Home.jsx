import MovieList from 'components/MovieList/MovieList';
import Title from 'components/Title/title';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/moviesAPI.js';
const Home = () => {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([{ id: 1, title: 'hello' }]);

  useEffect(() => {
    setStatus('Loading');

    getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => console.log(error.message))
      .finally(() => setStatus('fulfilled'));
  }, []);
  return (
    <div>
      <Title>Trending today</Title>

      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
