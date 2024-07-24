import { useAtomValue } from "jotai";
import { selectedOptionsAtom } from "./state";

type Props = {
  // selectedOptions: Option[];
};

const SelectedNames = ({}: Props) => {
  const selectedOptions = useAtomValue(selectedOptionsAtom);
  return (
    <p style={{ color: "white", height: "200px" }}>
      {selectedOptions.map((option) => option.name).join(", ")}
    </p>
  );
};

export default SelectedNames;
