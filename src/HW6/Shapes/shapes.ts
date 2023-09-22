import { ICircle, IRectangle, IShape, ISquare, ITriangle } from './shapes-types';

abstract class Shape implements IShape {
  protected constructor(
    readonly name: string,
    readonly color: string
  ) {}

  abstract calculateArea(): number;
}

export class Circle extends Shape implements ICircle {
  get radius(): number {
    return this.radiusValue;
  }

  constructor(
    name: string,
    color: string,
    private radiusValue: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return Math.round(Math.PI * this.radiusValue ** 2 * 100) / 100;
  }
}

export class Triangle extends Shape implements ITriangle {
  get sides(): Array<number> {
    return [this.side1, this.side2, this.side3];
  }

  constructor(
    name: string,
    color: string,
    private side1: number,
    private side2: number,
    private side3: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    const area = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(area * (area - this.side1) * (area - this.side2) * (area - this.side3));
  }
}

export class Square extends Shape implements ISquare {
  get side(): number {
    return this.sideLength;
  }

  constructor(
    name: string,
    color: string,
    private sideLength: number
  ) {
    super('Square', 'blue');
  }

  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }

  print(): string {
    return `${this.name} Area: ${this.calculateArea()} = ${this.sideLength} * ${this.sideLength}`;
  }
}

export class Rectangle extends Shape implements IRectangle {
  get widthLength(): number {
    return this.width;
  }

  get heightLength(): number {
    return this.height;
  }

  constructor(
    name: string,
    color: string,
    private width: number,
    private height: number
  ) {
    super(name, color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): string {
    return `${this.name} Area: ${this.calculateArea()} = ${this.width} * ${this.height}`;
  }
}
