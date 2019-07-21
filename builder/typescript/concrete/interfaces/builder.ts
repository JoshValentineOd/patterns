export default interface IBulder {
  reset(): void;
  setEngine(horsePower: Number): void;
  setWheels(amount: Number):void;
  setGPS(type: String): void;
  
}