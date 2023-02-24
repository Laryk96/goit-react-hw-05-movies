import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 150px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
  background-color: #212121;
`;
const Input = styled.input`
  margin-bottom: 20px;
  padding-left: 15px;
  width: 80%;
  height: 35px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #f0eeee;

  transition: transform 150ms ease-in;
  &:focus,
  &:hover {
    transform: scale(1.05);
  }
`;
const Button = styled.button`
  width: 100px;
  height: 32px;
  font-size: 18px;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: orange;
  }
`;

export { Input, Button, Form };
