import { Provider } from "jotai";
import { useAtomsDebugValue } from "jotai-devtools/utils";
import { ScopeProvider } from "jotai-scope";
import Picker from "./Picker";
import SelectedNames from "./SelectedNames";
import styles from "./index.module.css";
import { optionsAtom, selectedOptionsAtom } from "./state";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ScopeProvider atoms={[selectedOptionsAtom, optionsAtom]}>
          <Picker />
          <SelectedNames />
        </ScopeProvider>
      </div>
      <div className={styles.container}>
        <ScopeProvider atoms={[selectedOptionsAtom, optionsAtom]}>
          <Picker />
          <SelectedNames />
        </ScopeProvider>
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
