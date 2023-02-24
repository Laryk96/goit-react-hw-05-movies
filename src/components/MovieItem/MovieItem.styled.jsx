import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PopularMovieItem = styled.li`
  display: inline-block;

  background-color: orange;
  border-radius: 5px;
`;
const MovieLinkStyle = styled(Link)`
  display: block;

  color: #212121;
  padding: 10px;
`;

export { PopularMovieItem, MovieLinkStyle };
