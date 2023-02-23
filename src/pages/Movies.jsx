import ButtonToHome from 'components/buttons/ButtonToHome';
import MoreInfo from 'components/MoreInfo/MoreInfo';
import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { MovieInfoById } from 'services/moviesAPI';

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    MovieInfoById(id).then(({ data }) => setMovie(data));
  }, [id]);
  return (
    <>
      <ButtonToHome>Go back</ButtonToHome>
      <MovieItem movie={movie} />
      <MoreInfo />
      <Outlet />
    </>
  );
};
export default Movies;
