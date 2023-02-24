import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInfoById } from 'services/moviesAPI';

const { default: MovieInfo } = require('components/MovieInfo/MovieInfo');

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    setStatus('loading');

    MovieInfoById(id)
      .then(({ data }) => setMovie(data))
      .catch(error => {
        console.log(error.message);
        setStatus('not found');
      })
      .finally(() => setStatus('fulfilled'));
  }, [id]);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'fulfilled') {
    return <MovieInfo movie={movie} />;
  }
};

export default MovieDetails;
