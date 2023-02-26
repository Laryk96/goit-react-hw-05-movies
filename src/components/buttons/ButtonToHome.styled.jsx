import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonToHomePage = styled(Link)`
  position: absolute;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  top: 100px;
  padding: 8px;

  font-size: 20px;
  line-height: 1.666;
  background-color: #212121;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  transition: background-color 100ms ease-in, transform 100ms ease-in,
    color 100ms ease-in;

  &:hover {
    background-color: orange;
    color: #212121;
    transform: scale(1.05);
  }
`;

export { ButtonToHomePage };
