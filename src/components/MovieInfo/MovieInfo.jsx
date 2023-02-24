import MoreInfo from 'components/MoreInfo/MoreInfo';
import {
  Article,
  Descriotion,
  ImageWrapper,
  MovieTitle,
  SubTitle,
  Wrapper,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  <>
    <Article>
      <ImageWrapper>
        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
      </ImageWrapper>
      <Wrapper>
        <MovieTitle>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </MovieTitle>
        <Descriotion>
          User Score: {Math.round(movie.vote_average * 10)}%
        </Descriotion>
        <SubTitle>Overview</SubTitle>
        <Descriotion>{movie.overview}</Descriotion>
        <SubTitle>Genres</SubTitle>
        <Descriotion>{movie.genres.map(({ name }) => name)}</Descriotion>
      </Wrapper>
    </Article>
    <MoreInfo />
  </>;
};

export default MovieInfo;
