/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(argument) {
    this.argument = argument;
  }

  perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.argument.length; i++) {
      perimeter += this.argument[i];
    }
    return perimeter;
  }
}
