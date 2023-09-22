export interface IShape {
  readonly name: string;
  readonly color: string;
  calculateArea: () => number;
}

export interface ICircle extends IShape {
  radius: number;
}

export interface ITriangle extends IShape {
  sides: Array<number>;
}

export interface ISquare extends IShape {
  side: number;
  print: () => string;
}

export interface IRectangle extends IShape {
  widthLength: number;
  heightLength: number;
  print: () => string;
}
