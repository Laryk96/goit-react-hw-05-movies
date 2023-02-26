import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PopularMovieItem = styled.li`
  background-color: orange;
  border-radius: 5px;
  min-height: 300px;
  max-width: 300px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  transition: transform 150ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieLinkStyle = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 10px;

  color: #212121;
`;
const MovieTitle = styled.p`
  text-align: center;
`;

const Image = styled.img`
  border-radius: 5px;
  margin-bottom: 15px;
  height: 420px;
`;
export { PopularMovieItem, MovieLinkStyle, Image, MovieTitle };
