import axios from 'axios';

const API_KEY = 'b1cb6bb9f0fb8b16da0ef0bac91fc5ae';
const BASE_URL = `https://api.themoviedb.org/`;

const getPopularMovies = () =>
  axios.get(`${BASE_URL}3/trending/all/day?api_key=${API_KEY}`);

const getMoviesByName = (name, page = 1) =>
  axios.get(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${name}`
  );

const MovieInfoById = id =>
  axios.get(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=en-US`);

const getCast = id =>
  axios.get(
    `${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

const getMovieReviews = (id, page = 1) =>
  axios.get(
    `${BASE_URL}3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );

export {
  getPopularMovies,
  getMoviesByName,
  MovieInfoById,
  getCast,
  getMovieReviews,
};
