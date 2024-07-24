import { useAtom } from "jotai";
import { useCallback } from "react";
import { selectedOptionsAtom } from "./state";
import { Option } from "./types";

type Props = {
  option: Option;
};

const ListItem = ({ option }: Props) => {
  const [selectedOptions, setSelectedOptions] = useAtom(selectedOptionsAtom);
  const selected = selectedOptions.some(
    (selectedOption) => selectedOption.id === option.id
  );
  const toggleSelectedOption = useCallback(
    (option: Option) => {
      if (!selected) {
        setSelectedOptions([...selectedOptions, option]);
        return;
      }
      setSelectedOptions([
        ...selectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        ),
      ]);
    },
    [selected, selectedOptions, setSelectedOptions]
  );

  return (
    <li>
      <span>{option.name}</span>
      <input
        type={"checkbox"}
        checked={selected}
        onChange={() => {
          toggleSelectedOption(option);
        }}
      />
    </li>
  );
};

export default ListItem;
