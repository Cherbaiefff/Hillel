import { Circle, Rectangle, Square, Triangle } from './Shapes/shapes';

export const runHW6 = (): void => {
  const triangle = new Triangle('Triangle', 'purple', 30, 40, 50);
  console.log(triangle.name, triangle.color, triangle.calculateArea(), triangle.sides);

  const circle = new Circle('Circle', 'khaki', 80);
  console.log(circle.name, circle.color, circle.calculateArea(), circle.radius);

  const square = new Square('Square', 'blue', 180);
  console.log(square.name, square.color, square.side, square.calculateArea(), square.print());

  const rectangle = new Rectangle('Rectangle', 'red', 2000, 1000);
  console.log(
    rectangle.name,
    rectangle.color,
    rectangle.widthLength,
    rectangle.heightLength,
    rectangle.calculateArea(),
    rectangle.print()
  );
};
