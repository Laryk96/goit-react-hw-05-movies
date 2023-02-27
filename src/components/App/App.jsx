import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import MainLayouts from 'Layouts/MainLayouts';
import paths from 'routs/paths';

const Home = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

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
