import { Route, Routes } from 'react-router-dom';
import paths from 'routs/paths';
import MainLayouts from 'Layouts/MainLayouts';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
const { home, movies, movieID, cast, reviews, error } = paths;

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={movieID} element={<MovieDetails />}>
          <Route path={cast} element={<Cast />} />
          <Route path={reviews} element={<Reviews />} />
        </Route>
        <Route path={error} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
