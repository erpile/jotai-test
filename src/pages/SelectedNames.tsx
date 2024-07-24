import { useAtomValue } from "jotai";
import { selectedOptionsAtoms } from "./state";

type Props = {};

const SelectedNames = ({}: Props) => {
  const selectedOptions = useAtomValue(selectedOptionsAtoms);
  return (
    <p style={{ color: "white", height: "200px" }}>
      {selectedOptions.map((option) => option.name).join(", ")}
    </p>
  );
};

export default SelectedNames;
