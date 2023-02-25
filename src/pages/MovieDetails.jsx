import ButtonToHome from 'components/buttons/ButtonToHome';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInfoById } from 'services/moviesAPI';

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
    return (
      <>
        <ButtonToHome>Go to back</ButtonToHome>
        <MovieInfo movie={movie} />;
      </>
    );
  }
};

export default MovieDetails;
