import { IAbstractFactory } from "./interfaces";
import { GothicFactory, ClassicFactory } from './factories/index';
class Client  {
  factory : IAbstractFactory;
  constructor(factory: IAbstractFactory) {
    this.factory = factory;
  }
}

const clientGothic = new Client(new GothicFactory());
const clientClassic = new Client(new ClassicFactory());

console.log(clientClassic.factory.createChair());
console.log(clientClassic.factory.createTable());
console.log(clientClassic.factory.createTableCloth());

console.log(clientGothic.factory.createChair());
console.log(clientGothic.factory.createTable());
console.log(clientGothic.factory.createTableCloth());
