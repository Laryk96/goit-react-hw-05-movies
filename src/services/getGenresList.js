const getGenresList = genres => {
  return genres
    .reduce((acc, { name }) => `${acc}, ${name}`, '')
    .slice(1)
    .split(' ')
    .slice(1);
};

export default getGenresList;
