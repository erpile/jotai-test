import { useCallback } from "react";
import ListItem from "./ListItem";
import { Option } from "./types";

type Props = {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
  searchText: string;
};

const List = ({
  options,
  searchText,
  selectedOptions,
  setSelectedOptions,
}: Props) => {
  const toggleSelectedOption = useCallback(
    (option: Option) => {
      const selected = selectedOptions.some(
        (selectedOption) => selectedOption.id === option.id
      );
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
    [selectedOptions, setSelectedOptions]
  );
  return (
    <ul>
      {options &&
        options
          .filter((option) => option.name.includes(searchText))
          .map((option) => {
            const selected = selectedOptions.some(
              (selectedOption) => selectedOption.id === option.id
            );
            return (
              <ListItem
                key={option.id}
                option={option}
                selected={selected}
                onPressToggle={toggleSelectedOption}
              />
            );
          })}
    </ul>
  );
};

export default List;
