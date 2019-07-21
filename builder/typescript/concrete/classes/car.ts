import commonClass from "./commonClass";

export class Car extends commonClass {

  setEngine(horsePower: Number) {
    this.engine = horsePower;
  }

  setWheels(amount: Number) {
    this.wheels = amount;
  }

  setGPS(type: String) {
    this.GPS = type;
  }

}