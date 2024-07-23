import { useState } from "react";
import Picker from "./Picker";
import SelectedNames from "./SelectedNames";
import styles from "./index.module.css";
import { options } from "./state";
import { Option } from "./types";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Picker
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <SelectedNames selectedOptions={selectedOptions} />
        </div>
      </main>
    </>
  );
}
