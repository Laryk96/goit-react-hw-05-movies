import { Button, Form, Input } from './SearchMovie.styled';

const SearchMovie = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="search" type="text" placeholder="What will we look for" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchMovie;
