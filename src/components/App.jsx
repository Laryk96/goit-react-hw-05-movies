import { Route, Routes } from 'react-router-dom';
import paths from 'routs/paths';
import MainLayouts from 'Layouts/MainLayouts';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
const { home, movies, movie, cast, reviews } = paths;

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={movie} element={<Movies />}>
          <Route path={cast} element={<h2>This is Cast</h2>} />
          <Route path={reviews} element={<h2>This is Reviews</h2>} />
        </Route>
      </Route>
    </Routes>
  );
};
