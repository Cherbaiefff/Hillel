// Узагальнений стек
//
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

export class Stack<T> {
  get stack(): T[] {
    return this._stack;
  }

  constructor(private _stack: T[]) {}

  push(el: T): void {
    this._stack.push(el);
  }

  pop(): void {
    this._stack.pop();
  }

  peek(): T {
    if (this._stack.length) {
      return this._stack[this._stack.length - 1];
    } else {
      throw new Error('Stack is empty');
    }
  }
}
