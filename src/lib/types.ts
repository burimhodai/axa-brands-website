export type Category =
  | "KREJT"
  | "LOGO DIZAJN"
  | "PRINTIM DIGJITAL"
  | "PRODUKTE PROMOCIONALE"
  | "PRODUKTE TEKSTILI"
  | "DIZAJN I PRODUKTEVE";

export type WorkItem = {
  title: string;
  name: string;
  category: Category;
  image: string;
};
