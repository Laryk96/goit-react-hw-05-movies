import MoreInfo from 'components/MoreInfo/MoreInfo';
import {
  Article,
  Description,
  ImageWrapper,
  MovieTitle,
  SubTitle,
  Wrapper,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  return (
    <>
      <Article>
        <ImageWrapper>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </ImageWrapper>
        <Wrapper>
          <MovieTitle>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </MovieTitle>
          <Description>
            User Score: {Math.round(movie.vote_average * 10)}%
          </Description>
          <SubTitle>Overview</SubTitle>
          <Description>{movie.overview}</Description>
          <SubTitle>Genres</SubTitle>
          <Description>{movie.genres.map(({ name }) => name)}</Description>
        </Wrapper>
      </Article>
      <MoreInfo />
    </>
  );
};

export default MovieInfo;
