import { atom } from "jotai";
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

export const appScope = Symbol();

export const optionsAtom = atom<Option[]>(options);
export const selectedOptionsAtom = atom<Option[]>([]);
