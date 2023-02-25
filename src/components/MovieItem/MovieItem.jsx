import {
  Image,
  MovieLinkStyle,
  MovieTitle,
  PopularMovieItem,
} from './MovieItem.styled';
import paths from 'routs/paths';
import { generatePath } from 'react-router-dom';

const { movieID } = paths;

const MovieItem = ({ movie, state }) => {
  console.log();
  return (
    <PopularMovieItem>
      <MovieLinkStyle to={generatePath(movieID, { id: movie.id })} n>
        <Image
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
          }
          width="150"
          loading="lazy"
        />
        <MovieTitle>{movie.title || movie.original_name}</MovieTitle>
      </MovieLinkStyle>
    </PopularMovieItem>
  );
};

export default MovieItem;
