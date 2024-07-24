export type Option = {
  id: number;
  name: string;
};

export type OptionWithDetail = Option & {
  selected: boolean;
};
