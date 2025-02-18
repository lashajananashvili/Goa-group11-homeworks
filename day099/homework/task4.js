class Rectangle {
  constructor(width, height) {
    this._width = width > 0 ? width : 0;
    this._height = height > 0 ? height : 0;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value > 0) this._width = value;
  }

  set height(value) {
    if (value > 0) this._height = value;
  }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area);
rect.width = 8;
rect.height = 12;
console.log("Updated Area:", rect.area);