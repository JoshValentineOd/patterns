export class Product {
    fieldA: String;
    fieldB: String;
    fieldC: String;

    constructor() {
        this.fieldA = '';
        this.fieldB = '';
        this.fieldC = '';
    }

    setFieldA(text: String) {
        this.fieldA = text;
    }

    setFieldB(text: String) {
        this.fieldB = text;
    }

    setFieldC(text: String) {
        this.fieldC = text;
    }
} 