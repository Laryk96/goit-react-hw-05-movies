import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import MainLayouts from 'Layouts/MainLayouts';
import paths from 'routs/paths';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
