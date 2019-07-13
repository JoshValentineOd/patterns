import { IAbstractFactory } from './interfaces';
import { ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2 } from './concreteProducts';
export class ConcreteFactory1 implements IAbstractFactory {

    createProductA() {
        return new ConcreteProductA1;
    }
    createProductB() {
        return new ConcreteProductB1;
    }

}

export class ConcreteFactory2 implements IAbstractFactory {

    createProductA() {
        return new ConcreteProductA2;
    }

    createProductB() {
        return new ConcreteProductB2;
    }
}
