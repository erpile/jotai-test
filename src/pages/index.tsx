import { Provider } from "jotai";
import { useAtomsDebugValue } from "jotai-devtools/utils";
import { useHydrateAtoms } from "jotai/utils";
import Picker from "./Picker";
import SelectedNames from "./SelectedNames";
import styles from "./index.module.css";
import { options2, optionsAtom } from "./state";

const HydrateAtoms = ({ initialValues, children }) => {
  // initialising on state with prop on render here
  useHydrateAtoms(initialValues);
  return children;
};

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Provider>
          <HydrateAtoms initialValues={[[optionsAtom, options2]]}>
            <Picker />
            <SelectedNames />
          </HydrateAtoms>
        </Provider>
      </div>
      <div className={styles.container}>
        <Provider>
          <Picker />
          <SelectedNames />
        </Provider>
      </div>
    </main>
  );
}

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export default function HomeWithProvider() {
  return (
    <Provider>
      <DebugAtoms />
      <Home />
    </Provider>
  );
}
