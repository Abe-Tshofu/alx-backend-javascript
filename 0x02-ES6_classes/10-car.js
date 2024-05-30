// 10-car.js
const cloneKey = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneKey]() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }

  cloneCar() {
    return this[cloneKey]();
  }
}

