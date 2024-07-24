import { useAtom } from "jotai";
import { optionsAtomFamily } from "./state";
import { Option } from "./types";

type Props = {
  option: Option;
};

const ListItem = ({ option }: Props) => {
  // const [selectedOptions, setSelectedOptions] = useAtom(selectedOptionsAtom);
  // const selected = selectedOptions.some(
  //   (selectedOption) => selectedOption.id === option.id
  // );
  const [selected, setSelected] = useAtom(optionsAtomFamily(option.id));
  // const toggleSelectedOption = useCallback(
  //   (option: Option) => {
  //     if (!selected) {
  //       setSelectedOptions([...selectedOptions, option]);
  //       return;
  //     }
  //     setSelectedOptions([
  //       ...selectedOptions.filter(
  //         (selectedOption) => selectedOption.id !== option.id
  //       ),
  //     ]);
  //   },
  //   [selected, selectedOptions, setSelectedOptions]
  // );
  const toggleSelectedOption = () => {
    setSelected((prev) => !prev);
  };

  return (
    <li>
      <span>{option.name}</span>
      <input
        type={"checkbox"}
        checked={selected}
        onChange={() => {
          toggleSelectedOption();
        }}
      />
    </li>
  );
};

export default ListItem;
