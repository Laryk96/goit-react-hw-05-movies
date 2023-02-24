const SearchMovie = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="search" type="text" placeholder="What will we look for" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovie;
