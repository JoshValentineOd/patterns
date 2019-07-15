import { IAbstractFactory } from "./interfaces";

export default class Client {
  factory : IAbstractFactory;

  constructor (factory: IAbstractFactory) {
    this.factory = factory;
  }
  
}