export const runHW10 = (): void => {
  // Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
  // Як параметр типу повинен обов'язково виступати функціональний тип.
  type ReturnCustom<T> = T extends (...params: any[]) => infer U ? U : never;
  const funcA = <T extends string>(value: T): T => {
    return value;
  };
  const funcB = (obj: { name: string }): { name: string; age: number } => {
    return { name: obj.name, age: 22 };
  };

  let fA: ReturnCustom<typeof func1>;
  let fB: ReturnCustom<typeof func2>;

  // Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж,
  // де перше значення - це тип, що функція повертає, а другий - тип її параметру
  type DefineTypes<T> = T extends (v: infer U) => infer R ? [R, U] : never;

  const func1 = (value: string): void => {};
  const func2 = (value: number): number => {
    return value;
  };
  const func3 = <T extends boolean>(value: T): string => {
    return value ? 'true' : 'false';
  };

  let f1: DefineTypes<typeof func1>;
  let f2: DefineTypes<typeof func2>;
  let f3: DefineTypes<typeof func3>;
};
