import Cars from "../cars.json";

export interface Brand {
  id: string;
  name: string;
  cyrillicName: string;
  popular: boolean;
  country: string;
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  cyrillicName: string;
  class: Class;
  "year-from": number;
  "year-to": number | null;
}

export enum Class {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  Empty = "",
  F = "F",
  J = "J",
  M = "M",
  S = "S",
}
