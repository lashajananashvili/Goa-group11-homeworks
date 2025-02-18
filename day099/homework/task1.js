class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(`Car Make: ${car.make}, Model: ${car.model}`);