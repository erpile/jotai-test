import { useState } from "react";
import List from "./List";
import Search from "./Search";

type Props = {};

const Picker = ({}: Props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div style={{ color: "white" }}>
      <h3>Search Boxers</h3>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <List searchText={searchText} />
    </div>
  );
};

export default Picker;
