import { IBuilder } from "../interfaces/index";
import { Product } from '../product/product';


/*
    Another way is create unique seter for every property
*/

export class SecondBuilder implements IBuilder {

    result: Product;

    constructor() {
        this.result = new Product();
    }

    reset(): void {
        this.result = new Product();
    }

    buildStepA(): this {
        this.result.setFieldA("Second Builder field A!");
        return this;
    }

    buildStepB(): this {
        this.result.setFieldB("Second Builder field B!");
        return this;
    }

    buildStepC(): this {
        this.result.setFieldC("Second Builder field C!");
        return this;
    }

    getResult(): Product {
        return this.result;
    }

};