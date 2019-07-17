import { Product } from "../product/product"
export interface IBuilder {
    reset():void;
    buildStepA(): void;
    buildStepB(): void;
    buildStepC(): void;
    getResult(): Product;
};