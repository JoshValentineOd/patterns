import { IBuilder } from "../interfaces/";

import { Product } from '../product/product';
/*
    Another way is create unique seter for every property
*/

export class FirstBuilder implements IBuilder {

    result: Product;

    constructor() {
        this.result = new Product();
    }

    reset(): void {
        this.result = new Product();
    }

    buildStepA(): this {
        this.result.setFieldA("First Builder field A!");
        return this;
    }

    buildStepB(): this {
        this.result.setFieldB("First Builder field B!");
        return this;
    }

    buildStepC(): this {
        this.result.setFieldC("First Builder field C!");
        return this;
    }

    getResult(): Product {
        return this.result;
    }

};
