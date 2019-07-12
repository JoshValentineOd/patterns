export interface IProductA {
    name: String;
    quality: String;
    cost: String;
};

export interface IProductB {
    tableName: String;
    quantity: Number;
}

export interface IAbstractFactory {
    
    createProductA(): IProductA;
    createProductB(): IProductB;
}