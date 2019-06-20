interface IProduct {
    doStuff(): void;
}

class ConcreateProductA implements IProduct {

    doStuff(): void {
        console.log('ConcreteProductA');
    }

}

class ConcreteProductB implements IProduct {

    doStuff() {
        console.log('ConcreteCreatorB');
    }

}

abstract class Creator {

    abstract someOperation(): void;
    abstract createProduct(): IProduct;

}


class ConcreteCreatorA extends Creator {

    someOperation(): void {
        console.log('I`m a concreteCreatorA');
    }

    createProduct(): IProduct {
        this.someOperation();
        return new ConcreateProductA();
    }

}

class ConcreateCreatorB extends Creator {

    someOperation(): void {
        console.log('I`m a concreteCreatorB');
    }

    createProduct() {
        this.someOperation();
        return new ConcreteProductB();
    }
}

let first = new ConcreteCreatorA();
console.log(typeof (first.createProduct()));
let second = new ConcreateCreatorB();
console.log(typeof (second.createProduct()));