import { ConcreteFactory1, ConcreteFactory2 } from "./concreteFactories";
import Client from './client'

const concreteFactory1 = new ConcreteFactory1;
const concreteFactory2 =  new ConcreteFactory2;
const firstClient = new Client(concreteFactory1);
const secondClient = new Client(concreteFactory2);

console.log(firstClient.factory.createProductA());
console.log(firstClient.factory.createProductB());
console.log(secondClient.factory.createProductA());
console.log(secondClient.factory.createProductB());
 