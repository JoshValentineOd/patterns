import IBuilder from "../interfaces/builder";
import { Manual } from "../classes";
export class ManualBuilder implements IBuilder {

  manual: Manual;

  constructor() {
    this.manual = new Manual();
  }
  
  reset() {
    this.manual = new Manual();
  }

  setEngine(horsePower: Number) {
    this.manual.setEngine(horsePower);
  }

  setWheels(amount: Number) {
    this.manual.setWheels(amount);
  }

  setGPS(type: String) {
    this.manual.setGPS(type);
  }

  getResult(): Manual {
    return this.manual;
  }

}