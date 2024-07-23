import { Option } from "./types";

type Props = {
  option: Option;
  selected: boolean;
  onPressToggle: (option: Option) => void;
};

const ListItem = ({ option, selected, onPressToggle }: Props) => {
  return (
    <li>
      <span>{option.name}</span>
      <input
        type={"checkbox"}
        checked={selected}
        onChange={() => {
          onPressToggle(option);
        }}
      />
    </li>
  );
};

export default ListItem;
