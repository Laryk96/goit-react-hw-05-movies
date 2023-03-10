import { generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Image, MovieTitle, PopularMovieItem } from './MovieItem.styled';
import LinkWithLocation from 'components/LinkWithLocation';
import paths from 'routs/paths';

const { movieIDForLink } = paths;

const MovieItem = ({ movie: { id, title, poster_path, original_name } }) => {
  return (
    <PopularMovieItem>
      <LinkWithLocation to={generatePath(movieIDForLink, { id })}>
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

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieItem;
