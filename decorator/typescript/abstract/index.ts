interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {

    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

function clientCode(component: Component) {
    console.log(`Result: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log(`Client: I've got a simple component:`);
clientCode(simple);

const decoratorOne = new ConcreteDecoratorA(simple);
const decoratorTwo = new ConcreteDecoratorB(decoratorOne);
clientCode(decoratorTwo);

// Thx for https://refactoring.guru/ru/design-patterns/decorator/typescript/example