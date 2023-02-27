import { useEffect, useState } from 'react';
import { getMoviesByName } from 'services/moviesAPI';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';
import { MoviesLoader } from 'services/ContentLoader';
import { MainTitle } from 'components/Title/Title.styled';
import { useSearchParams } from 'react-router-dom';
import serializeFormQuery from 'services/updateSearchQuery';
import { warning } from 'services/notification';

const Loader = () => {
  return MoviesLoader();
};

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setStatus('loading');

    getMoviesByName(searchQuery)
      .then(({ data }) => {
        if (data.total_pages <= 1) {
          setStatus('notFound');
          return warning(`Sorry we didn't find anything`);
        }
        setMovie(data.results);
        setStatus('found');
      })
      .catch(error => {
        setStatus('error');
        console.log(error.message);
      });
  }, [searchQuery]);

  const handelSubmitForm = event => {
    event.preventDefault();
    const query = event.target.elements.search.value;

    if (query === '') {
      warning(`we're sorry, but  you should enter some name in the search box`);
    }

    const params = serializeFormQuery(query);

    setSearchParams(params);
    event.currentTarget.reset();
  };

  return (
    <>
      {status === 'fulfilled' && (
        <>
          <MainTitle>Loading...</MainTitle>
          <Loader />
        </>
      )}
      <SearchMovie onSubmit={handelSubmitForm} />
      {status === 'found' && <MovieList movies={movie} />}
    </>
  );
};
export default Movies;
