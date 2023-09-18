export interface Calculator {
  add: (x: number, y: number) => number;
  subtract: (x: number, y: number) => number;
  multiply: (x: number, y: number) => number;
  divide: (x: number, y: number) => number;
}

export enum Operation {
  'Add' = 'add',
  'Substract' = 'substract',
  'Multiply' = 'multiply',
  'Divide' = 'divide',
}
