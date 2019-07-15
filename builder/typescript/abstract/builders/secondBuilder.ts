import { IBuilder, IProduct } from "../interfaces/index";

/*
    Another way is create unique seter for every property
*/

export class SecondBuilder implements IBuilder {
    
    result: IProduct;
    
    reset() : void {
        // Object.keys(this.result).forEach( key => this.result[key] = undefined);
        this.result.fieldA = undefined;
        this.result.fieldB = undefined;
        this.result.fieldC = undefined;
    }

    buildStepA(): void {
        this.result.fieldA = 'A here';
    }

    buildStepB(): void {
        this.result.fieldB = 'B here';
    }

    buildStepC(): void {
        this.result.fieldC = 'C here';
    }

    getResult(): IProduct {
        return this.result;
    }

};