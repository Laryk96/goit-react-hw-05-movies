import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  background-color: #212121;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: white;
  font-size: 20px;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 15px;
`;

const InfoList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const InfoLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  width: 80px;
  height: 30px;
  color: black;
  border-radius: 6px;
`;

const Item = styled.li`
  transition: transform 100ms ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export { Wrapper, Title, InfoList, InfoLinkStyled, Item };