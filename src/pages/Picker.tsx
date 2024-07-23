import { useState } from "react";
import List from "./List";
import Search from "./Search";
import { Option } from "./types";

type Props = {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
};

const Picker = ({ options, selectedOptions, setSelectedOptions }: Props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ color: "white" }}>
      <h3>Search Boxers</h3>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <List
        searchText={searchText}
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </div>
  );
};

export default Picker;
