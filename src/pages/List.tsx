const List = ({ options, searchText }) => {
  return (
    <ul>
      {options &&
        options
          .filter((option) => option.name.includes(searchText))
          .map((option) => {
            return <li>{option.name}</li>;
          })}
    </ul>
  );
};

export default List;
