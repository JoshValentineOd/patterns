import commonClass from "./commonClass";

export class Manual extends commonClass {
  
  engineDescription: String = '';
  wheelsDescription: String = '';
  GPSDescription: String = '';


  setEngine(horsePower: Number) {
    this.engine = horsePower;
    this.engineDescription = `WOW. This car is so powerfull!!!!! ${this.engine} horses`;
  }

  setWheels(amount: Number) {
    this.wheels = amount;
    this.wheelsDescription = `Hey man. This car have ${amount} wheels`;
  }

  setGPS(type: String) {
    this.GPS = type;
    this.GPSDescription = `Ok. The type of GPS is ${this.GPS}`;
  }

  
}