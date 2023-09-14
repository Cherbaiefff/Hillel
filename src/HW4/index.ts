export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const runHW4 = (): void => {
  // Напишите функцию isString, которая проверяет, является ли переданное значение строкой, и используйте ее для ограничения типа переменной.
  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  console.log(isString(1));

  // У вас есть массив с элементами разных типов. Напишите функцию, которая принимает этот массив и фильтрует его,
  // чтобы в итоге остались только строки. Используйте проверку типа для этой задачи.
  const randomListOfValues: any[] = [true, "1", 8, "ololo", { name: "OLOLO" }];

  const filterList = (list: typeof randomListOfValues): string[] => {
    return list.filter((value) => isString(value));
  };

  console.log(filterList(randomListOfValues));

  // У вас есть объект, который может содержать произвольные свойства.
  // Напишите функцию, которая принимает этот объект и возвращает значение одного из свойств, если оно существует и имеет определенный тип.
  type Car = {
    wheels: number;
    isElectric: boolean;
    model: string;
    isFast: boolean;
  };

  const car: Car = {
    wheels: 4,
    isElectric: true,
    model: "Tesla",
    isFast: true,
  };

  const isElectric = (isElectric: boolean): isElectric is boolean => {
    return typeof isElectric === "boolean";
  };

  const getProperty = (obj: Car): boolean => {
    if ("isElectric" in obj && isElectric(obj.isElectric))
      return obj.isElectric;

    return false;
  };

  getProperty(car);

  // Создайте несколько защитников, каждый из которых проверяет определенный аспект объекта (например, наличие определенного свойства или его тип).
  // Затем напишите функцию, которая использует эти защитники в комбинации для уточнения типа объекта до более конкретного типа.

  type Cat = {
    type: "cat";
    meow: () => void;
    purr: boolean;
  };

  type Dog = {
    type: "dog";
    bark: () => void;
  };

  const isCat = (pet: Cat | Dog): pet is Cat => {
    return pet.type === "cat";
  };

  const hasPurrKey = (pet: Cat | Dog, key: string): pet is Cat => {
    return key in pet;
  };

  const saySmth = (pet: Cat | Dog): void => {
    if (isCat(pet) && hasPurrKey(pet, "purr")) return pet.meow();
    else pet.bark();
  };

  const cat: Cat = {
    type: "cat",
    meow() {
      console.log("MEOW");
    },
    purr: true,
  };

  saySmth(cat);

  // У вас есть переменная, которая может иметь один из нескольких типов данных (например, строку или число).
  // Напишите функцию, которая принимает эту переменную и выполняет определенные операции, специфичные для каждого из типов данных.
  let someValue: string | number = 1;

  const valueIsNumber = (value: unknown): value is number => {
    return typeof value === "number";
  };

  function performOperation(value: number): number;
  function performOperation(value: string): string;

  function performOperation(value: number | string): number | string {
    if (valueIsNumber(value)) return value.toExponential();
    else return value.toUpperCase();
  }

  const exponentialNum = performOperation(someValue);
  someValue = "ololo";
  const upperCasedStr = performOperation(someValue);

  // Создайте типовой защитник, который будет проверять, является ли переданное значение функцией.
  // Затем напишите функцию, которая использует этот защитник для уточнения типа переменной и вызывает переданную функцию, если она существует.

  const isFunction = (func: unknown): func is Function => {
    return func instanceof Function;
  };

  const callFunc = (value: unknown): void => {
    if (isFunction(value)) {
      value();
      return;
    }

    throw new Error("Value is not a function");
  };

  callFunc(() => console.log("Log something"));

  // Создайте классы с иерархией наследования, а затем напишите функцию,
  // которая использует защитник типа для уточнения типа объектов на основе этой иерархии.

  class Shape {
    constructor(private _type: string, public color: string) {}

    get type(): string {
      return this._type;
    }

    getInfo(): string {
      return `Shape is ${this.color}`;
    }
  }

  class Circle extends Shape {
    constructor(type: string, color: string, public radius: number) {
      super(type, color);
    }

    getCirleArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  class Square extends Shape {
    constructor(type: string, color: string, public sideLength: number) {
      super(type, color);
    }

    getSquareArea(): number {
      return this.sideLength ** 2;
    }
  }

  const isSquare = (shape: Circle | Square): shape is Square => {
    return shape instanceof Shape && shape.type === "square";
  };

  const getShapeArea = (shape: Circle | Square): number => {
    return isSquare(shape) ? shape.getSquareArea() : shape.getCirleArea();
  };

  const cirle = new Circle("circle", "purple", 20);
  getShapeArea(cirle);
};
