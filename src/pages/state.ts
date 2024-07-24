import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { Option } from "./types";

export const options: Option[] = [
  {
    id: 1,
    name: "Mohammad Ali",
  },
  {
    id: 2,
    name: "Manny Pacquiao",
  },
  {
    id: 3,
    name: "Mike Tyson",
  },
  {
    id: 4,
    name: "Joe Louis",
  },
  {
    id: 5,
    name: "Roberto Duran",
  },
];

export const options2: Option[] = [
  {
    id: 1,
    name: "Mohammad Ali",
  },
  {
    id: 2,
    name: "Manny Pacquiao",
  },
];

export const appScope = Symbol();

export const optionsAtom = atom<Option[]>(options);
export const optionsAtomFamily = atomFamily((id) => atom(false));
export const selectedOptionsAtoms = atom((get) => {
  const options = get(optionsAtom);
  return options.filter((option) => get(optionsAtomFamily(option.id)));
});
