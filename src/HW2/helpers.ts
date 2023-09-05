export class CustomArray<T> extends Array<T> {
  toSorted(compareFn: (a: T, b: T) => number): T[] {
    return this.slice().sort(compareFn);
  }
}
