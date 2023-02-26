import MoreInfo from 'components/MoreInfo/MoreInfo';
import { func } from 'prop-types';
import getGenresList from 'services/getGenresList';
import {
  Article,
  Description,
  ImageWrapper,
  MovieTitle,
  SubTitle,
  Wrapper,
} from './AboutMovie.styled';

const AboutMovie = ({
  movie: {
    title,
    poster_path,
    release_date,
    overview,
    genres: tags,
    vote_average,
  },
}) => {
  const genres = getGenresList(tags);

  return (
    <>
      <Article>
        <ImageWrapper>
          <img
            alt={title}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        </ImageWrapper>
        <Wrapper>
          <MovieTitle>
            {title} ({release_date.slice(0, 4)})
          </MovieTitle>
          <Description>
            User Score: {Math.round(vote_average * 10)}%
          </Description>
          <SubTitle>Overview</SubTitle>
          <Description>{overview}</Description>
          <SubTitle>Genres</SubTitle>
          <Description>{genres.map(genres => genres + ' ')}</Description>
        </Wrapper>
      </Article>
      <MoreInfo />
    </>
  );
};

export default AboutMovie;
