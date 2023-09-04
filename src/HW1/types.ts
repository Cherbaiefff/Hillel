export interface IStudent {
  firstName: string;
  lastName: string;
  birthYear: number;
  getPerformanceRating: () => number;
}

export interface IGroup {
  students: IStudent[];
}

export enum Levels {
  Begginer = "Begginer",
  Elementary = "Elementary",
  PreIntermediate = "PreIntermediate",
  Intermediate = "Intermediate",
  UpperIntermediate = "UpperIntermediate",
  Advanced = "Advanced",
}

export type Grades = {
  [subject: string]: number;
};
