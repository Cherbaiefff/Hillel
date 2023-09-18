import { Calculator, Operation } from './types';

const calculate = (calculator: Calculator, operation: Operation, x: number, y: number): number | undefined => {
  switch (operation) {
    case Operation.Add:
      return calculator.add(x, y);
    case Operation.Substract:
      return calculator.subtract(x, y);
    case Operation.Multiply:
      return calculator.multiply(x, y);
    case Operation.Divide:
      if (y !== 0) {
        return calculator.divide(x, y);
      } else {
        console.error('You cannot divide by 0');
        return undefined;
      }
    default:
      console.error('Cant perform this operation');
      return undefined;
  }
};

const calculator: Calculator = {
  add: (x: number, y: number) => x + y,
  subtract: (x: number, y: number) => x - y,
  multiply: (x: number, y: number) => x * y,
  divide: (x: number, y: number) => x / y,
};

export const addNums = calculate(calculator, Operation.Add, 2, 2);
export const divide = calculate(calculator, Operation.Divide, 16, 3);
