import { IProductA, IProductB } from "./interfaces";

export class ConcreteProductA1 implements IProductA {
    name: String;
    quality: String;
    cost: String;

    constructor() {
        this.name = 'concreteProductA1';
        this.quality = 'perfect';
        this.cost = '9.99$';
    };

    doSomething() {
        console.log('yes i do');
    }

}


export class ConcreteProductA2 implements IProductA {
    name: String;
    quality: String;
    cost: String;

    constructor() {
        this.name = 'concreteProductA2';
        this.quality = 'bad';
        this.cost = '9.99$';
    };

    doSomething() {
        console.log('yes i do');
    }
}


export class ConcreteProductB1 implements IProductB {
    tableName: String;
    quantity: Number;

    constructor() {
        this.tableName = 'tableNameB1';
        this.quantity = 10;
    }
}

export class ConcreteProductB2 implements IProductB {
    tableName: String;
    quantity: Number;

    constructor() {
        this.tableName = 'tableNameB2';
        this.quantity = 20;
    }
}

