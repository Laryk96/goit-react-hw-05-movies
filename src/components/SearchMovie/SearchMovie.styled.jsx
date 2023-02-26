import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 150px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
  background-color: #212121;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding-left: 15px;
  padding-top: 5px;
  width: 80%;
  height: 35px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f0eeee;

  outline: none;
  transition: border 150ms ease-in;
  &:focus,
  &:hover {
    border: 2px solid orange;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 32px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  transition: background-color 150ms ease-in, transform 150ms ease-in;
  &:hover {
    background-color: orange;
    transform: scale(1.05);
  }
`;

export { Input, Button, Form };
