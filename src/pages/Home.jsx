import MovieList from 'components/MovieList/MovieList';
import { MainTitle } from 'components/Title/Title.styled';
import { useEffect, useState } from 'react';
import { MoviesLoader } from 'services/ContentLoader';
import { getPopularMovies } from 'services/moviesAPI.js';

const Loader = () => {
  return MoviesLoader();
};

const Home = () => {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setStatus('Loading');
    setTimeout(() => {}, 100);
    getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => console.log(error.message))
      .finally(() => setStatus('fulfilled'));
  }, []);

  return (
    <div>
      {status === 'Loading' ? (
        <>
          <MainTitle>Loading...</MainTitle>
          <Loader />
        </>
      ) : (
        <MainTitle>Trending today</MainTitle>
      )}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
