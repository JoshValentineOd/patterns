import { IBuilder } from '../interfaces/'
export class Director {

    builder: IBuilder;

    constructor(builder: IBuilder) {
        this.builder = builder;
    }

    changeBuilder(builder: IBuilder) {
        this.builder = builder;
    }

    make(type: String) {
        this.builder.reset();
        if (type === 'hello') {
            this.builder.buildStepA();
            this.builder.buildStepB();
        } else {
            this.builder.buildStepB();
            this.builder.buildStepC();
        }
    }
}