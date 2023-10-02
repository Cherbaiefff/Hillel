import { Stack } from './tasks/stack';
import { Dictionary } from './tasks/dictionary';
import { filterArray } from './tasks/filterArray';

export const runHW8 = (): void => {
  // Stack
  const elStack1 = new Stack<number>([1, 2, 3, 4, 5]);
  elStack1.push(111);
  console.log(elStack1.peek());
  elStack1.pop();

  const elStack2 = new Stack<string>([]);
  elStack2.push('qwerty');
  console.log(elStack2.peek());

  // Dictionary
  const initialEntries: [string, number][] = [
    ['one', 1],
    ['two', 2],
    ['three', 3],
  ];

  const myDictionary = new Dictionary<string, number>(initialEntries);
  myDictionary.set('four', 4);
  console.log(myDictionary);
  console.log(myDictionary.has('four'));
  console.log(myDictionary.get('two'));

  const evenNumbers = filterArray([1, 2, 3, 4, 5], value => value % 2 === 0);
  console.log(evenNumbers);

  const filterAge = filterArray(
    [
      { name: 'John', age: 30 },
      { name: 'Bob', age: 14 },
    ],
    value => value.age >= 18
  );
  console.log(filterAge);
};
