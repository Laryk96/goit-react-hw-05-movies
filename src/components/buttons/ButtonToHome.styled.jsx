import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonToHomePage = styled(Link)`
  position: absolute;
  top: 100px;
  display: inline-block;
  padding: 6px;

  font-size: 18px;
  line-height: 1.666;
  background-color: #212121;
  color: white;
  border-radius: 5px;
  text-decoration: none;
`;

export { ButtonToHomePage };
