export interface IProductA {
    name: String;
    quality: String;
    cost: String;
    doSomething():void;
};

export interface IProductB {
    tableName: String;
    quantity: Number;
}

export interface IAbstractFactory {
    
    createProductA(): IProductA;
    createProductB(): IProductB;
}