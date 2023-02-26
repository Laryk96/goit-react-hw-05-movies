import { Image, MovieTitle, PopularMovieItem } from './MovieItem.styled';
import paths from 'routs/paths';
import { generatePath } from 'react-router-dom';
import LinkWithLocation from 'components/LinkWithLocation/LinkWithLocation';

const { movieID } = paths;

const MovieItem = ({ movie: { id, title, poster_path, original_name } }) => {
  return (
    <PopularMovieItem>
      <LinkWithLocation to={generatePath(movieID, { id })}>
        <Image
          alt={title}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
          }
          loading="lazy"
        />
        <MovieTitle>{title || original_name}</MovieTitle>
      </LinkWithLocation>
    </PopularMovieItem>
  );
};

export default MovieItem;
