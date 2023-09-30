import { IType1, IType2, IType3, IType4, IType5, IType6 } from './types/types';

export const runHW7 = (): void => {
  const task1: IType1 = {
    name: 'Oleg',
    age: 30,
  };

  const task2: IType2 = {
    logValue(value) {
      console.log(value);
    },
    sumValues(a: number, b: number) {
      console.log(a + b);
    },
  };

  task2.logValue('something');
  task2.sumValues(1, 2);

  const task3: IType3 = {
    0: 'q',
    1: 'w',
    2: 'e',
    3: 'r',
    4: 't',
    5: 'y',
  };

  const task4: IType4 = {
    name: 'Sergey',
    age: 33,
    isMarried: false,
    hasDog: false,
    surname: 'Koternyak',
  };

  const task5: IType5 = {
    name: 'Sergey',
    lastName: 'Koternyak',
    requiredSkill: ['JS', 'TS', 'Angular'],
  };

  const task6: IType6 = {
    value1: 1,
    value2: 2,
    value3: '2',
  };

  const isNumber = (value: unknown): value is number => {
    return typeof value === 'number';
  };

  const checkNumberValues = (someObj: IType6): boolean => {
    for (const key in someObj) {
      if (!isNumber(someObj[key])) return false;
    }
    return true;
  };

  console.log(checkNumberValues(task6));
};
