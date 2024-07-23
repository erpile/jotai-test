import { Option } from "./types";

type Props = {
  selectedOptions: Option[];
};

const SelectedNames = ({ selectedOptions }: Props) => {
  return (
    <p style={{ color: "white", height: "200px" }}>
      {selectedOptions.map((option) => option.name).join(", ")}
    </p>
  );
};

export default SelectedNames;
