import { IProduct } from "./";

export interface IBuilder {
    reset():void;
    buildStepA(): void;
    buildStepB(): void;
    buildStepC(): void;
    getResult(): IProduct;
};