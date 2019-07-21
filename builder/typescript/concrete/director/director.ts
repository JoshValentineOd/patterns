import IBuilder from "../interfaces/builder";
export class Director {
  builder: IBuilder;

  constructor(builder: IBuilder) {
    this.builder = builder
  }

  makeSportCar() {
    this.builder.reset();
    this.builder.setEngine(900);
    this.builder.setGPS('GLONASS');
    this.builder.setWheels(8);
  }

  makeSUV() {
    this.builder.reset();
    this.builder.setEngine(110);
    this.builder.setWheels(4);
    this.builder.setGPS('none');
  }




}