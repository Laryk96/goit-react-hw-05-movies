import styled from '@emotion/styled';

const PageFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 20px;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 15px;
  background-color: #212121;
`;
const Text = styled.p`
  color: orange;
  font-size: 18px;
  line-height: 1.7;
`;

const List = styled.ul`
  display: flex;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  gap: 10px;
  background-color: white;
`;

export { PageFooter, Text, List };
