export const runH9 = (): void => {
  // Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
  type DeepReadonly<T> = {
    readonly [K in keyof T]: T extends object ? DeepReadonly<T[K]> : T[K];
  };

  const sampleOne: DeepReadonly<{
    name: string;
    age: number;
    otherProps: { hasFriends: boolean; isMarried: boolean };
  }> = {
    name: 'John',
    age: 22,
    otherProps: {
      hasFriends: true,
      isMarried: false,
    },
  };

  // sampleOne.otherProps.hasFriends = false;

  // Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
  type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T extends object ? DeepRequireReadonly<T[K]> : T[K];
  };

  const sampleTwo: DeepRequireReadonly<{
    name: string;
    age: number;
    hasPets: boolean;
    otherProps: { isStudent: boolean };
  }> = {
    name: 'Bob',
    age: 11,
    hasPets: true,
    otherProps: { isStudent: true },
  };

  // sampleTwo.otherProps.isStudent = false;

  // Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
  type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<keyof T /* or K */ & string>]: T[K];
  };

  const sampleThree: UpperCaseKeys<{ userName: string; isAdmin: boolean }> = {
    USERNAME: 'user1',
    ISADMIN: true,
  };

  // Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
  type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: {
      value: T[K];
      writable: boolean;
      enumerable: boolean;
      configurable: boolean;
      get?: () => T[K];
      set?: (value: T[K]) => void;
    };
  };

  type SomeObjectType = {
    name: string;
    age: number;
  };

  const someObj: ObjectToPropertyDescriptor<SomeObjectType> = {
    name: {
      value: 'oleg',
      writable: true,
      enumerable: false,
      configurable: true,
    },
    age: {
      value: 3,
      writable: false,
      enumerable: true,
      configurable: false,
    },
  };

  console.log(someObj);
};
