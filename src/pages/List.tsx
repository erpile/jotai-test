import { useAtomValue } from "jotai";
import ListItem from "./ListItem";
import { optionsAtom } from "./state";

type Props = {
  searchText: string;
};

const List = ({ searchText }: Props) => {
  const options = useAtomValue(optionsAtom);
  return (
    <ul>
      {options &&
        options
          .filter((option) => option.name.includes(searchText))
          .map((option) => {
            return <ListItem key={option.id} option={option} />;
          })}
    </ul>
  );
};

export default List;
