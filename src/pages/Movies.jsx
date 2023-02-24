import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ButtonToHome from 'components/buttons/ButtonToHome';
import MoreInfo from 'components/MoreInfo/MoreInfo';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { getMoviesByName, MovieInfoById } from 'services/moviesAPI';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!title) {
      return;
    }

    setStatus('loading');

    getMoviesByName(title)
      .then(({ data }) => setMovie(data.results))
      .catch(error => {
        setStatus('error');
        console.log(error.message);
      })
      .finally(() => {
        setStatus('found');
      });
  }, [title]);

  const handelSubmitForm = event => {
    event.preventDefault();

    const search = event.target.elements.search.value;
    setTitle(search);
  };

  return (
    <>
      {status === 'found' && <ButtonToHome>Go back</ButtonToHome>}
      {status !== 'fulfilled' && <SearchMovie onSubmit={handelSubmitForm} />}
      {status === 'found' && <MovieList movies={movie} />}
    </>
  );
};
export default Movies;
