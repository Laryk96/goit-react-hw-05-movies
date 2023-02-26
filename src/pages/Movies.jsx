import { useEffect, useState } from 'react';
import ButtonToHome from 'components/buttons/ButtonToHome';
import { getMoviesByName } from 'services/moviesAPI';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';
import { HomeLoader } from 'services/ContentLoader';
import { MainTitle } from 'components/Title/Title.styled';

const Movies = () => {
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
    event.currentTarget.reset();
  };

  return (
    <>
      {status === 'found' && <ButtonToHome>Go back</ButtonToHome>}
      {status === 'loading' && (
        <>
          <MainTitle>Loading...</MainTitle>
          {HomeLoader()}
        </>
      )}
      {status !== 'fulfilled' && <SearchMovie onSubmit={handelSubmitForm} />}
      {status === 'found' && <MovieList movies={movie} />}
    </>
  );
};
export default Movies;
