const Search = ({ searchText, setSearchText }) => {
  return (
    <input
      value={searchText}
      style={{ color: "black" }}
      onChange={(event) => setSearchText(event.target.value)}
    />
  );
};

export default Search;
