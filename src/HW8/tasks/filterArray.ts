// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
export const filterArray = <T>(array: T[], condition: (value: T) => boolean): T[] => {
  const filteredArray: T[] = [];

  for (const elem of array) {
    if (condition(elem)) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
};
