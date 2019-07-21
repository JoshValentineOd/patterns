import IBuilder from "../interfaces/builder";
import { Car } from "../classes";
export class CarBuilder implements IBuilder {

  car: Car;

  constructor() {
    this.car = new Car();
  }
  
  reset() {
    this.car = new Car();
  }

  setEngine(horsePower: Number) {
    this.car.setEngine(horsePower);
  }

  setWheels(amount: Number) {
    this.car.setWheels(amount);
  }

  setGPS(type: String) {
    this.car.setGPS(type);
  }

  getResult(): Car {
    return this.car;
  }

}