import Prototype from "./interfaces/prototype";

class ConcretePrototype implements Prototype {
    fieldOne: String;
    fieldTwo: String;
    
    constructor(prototype) {
        this.fieldOne = prototype.fieldOne;
        this.fieldTwo = prototype.fieldTwo;
    }

    clone() {
        return new ConcretePrototype(this);
    }
}

const existingProt = new ConcretePrototype({ fieldOne: 'Hello', fieldTwo: 'World'});

const copy = existingProt.clone();

console.log(existingProt);
console.log(copy);

console.log(existingProt === copy);