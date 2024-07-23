import { useState } from "react";
import List from "./List";
import Search from "./Search";

const Picker = ({ options } = { options: [] }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div style={{ color: "white" }}>
      <h3>Search Boxers</h3>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <List searchText={searchText} options={options} />
    </div>
  );
};

export default Picker;
