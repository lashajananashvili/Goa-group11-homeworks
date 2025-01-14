class Vehicle {
  #speed; 

  constructor(speed = 0) {
    this.#speed = speed;
  }

  getSpeed() {
    return this.#speed;
  }

  setSpeed(value) {
    if (value >= 0) this.#speed = value;
  }
}

class Bike extends Vehicle {
  accelerate(amount) {
    this.setSpeed(this.getSpeed() + amount);
  }
}

const bike = new Bike(10);
bike.accelerate(15);
console.log("Bike Speed:", bike.getSpeed());