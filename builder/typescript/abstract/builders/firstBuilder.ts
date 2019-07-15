import { IBuilder, IProduct } from "../interfaces/";

/*
    Another way is create unique seter for every property
*/

export class FirstBuilder implements IBuilder {

    result: IProduct;

    constructor() {
    }

    reset(): void {
        // Object.keys(this.result).forEach( key => this.result[key] = undefined);
        this.result.fieldA = '';
        this.result.fieldB = '';
        this.result.fieldC = '';
    }

    buildStepA(): void {
        this.result.fieldA = 'A exists';
    }

    buildStepB(): void {
        this.result.fieldB = 'B exists';
    }

    buildStepC(): void {
        this.result.fieldC = 'C exists';
    }

    getResult(): IProduct {
        return this.result;
    }

};
