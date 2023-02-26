const serializeFormQuery = query => {
  return query !== '' ? { query } : {};
};

export default serializeFormQuery;
