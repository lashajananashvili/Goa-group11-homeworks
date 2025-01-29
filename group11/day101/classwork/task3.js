class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super("Triangle", 3);
      this.base = base;
      this.height = height;
    }
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const triangle = new Triangle(10, 5);
  console.log(`Triangle Area: ${triangle.calculateArea()}`);