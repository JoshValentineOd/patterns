import commonInterface from "../interfaces/commonInterface";
export default abstract class commonClass implements commonInterface {
  wheels: Number = 0;
  engine: Number = 0;
  GPS: String = 'none'


  abstract setEngine(horsePower: Number): void;
  
  abstract setWheels(amount: Number): void;

  abstract setGPS(type: String): void;
}