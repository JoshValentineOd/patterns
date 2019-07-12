import { IProductA, IProductB, IAbstractFactory } from './interfaces';

let concreteProductA2: IProductA = {
    name: 'concreteProductA2',
    quality: 'bad',
    cost: '9.99$'
};

let concreteProductB2: IProductB = {
    tableName: 'tableNameB2',
    quantity: 20,
};

class ConcreteFactory1 implements IAbstractFactory {

    private concreteProductA: IProductA;

    private concreteProductB: IProductB;

    constructor() {

        this.concreteProductA = {
            name: 'concreteProductA1',
            quality: 'perfect',
            cost: '9.99$',
        };

        this.concreteProductB = {
            tableName: 'tableNameB1',
            quantity: 10,
        }
    }

    createProductA(): IProductA {
        return this.concreteProductA;
    }
    createProductB(): IProductB {
        return this.concreteProductB;
    }

}

class ConcreteFactory2 implements IAbstractFactory {

    private 
}


