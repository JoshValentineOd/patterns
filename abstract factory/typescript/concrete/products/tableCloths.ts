import { ITableCloth } from "../interfaces/index";

export class TableClothGothic implements ITableCloth {
    readonly quality: String = 'good';
    readonly color: String = 'black';
    readonly height: Number = 12;
    readonly width: Number = 24;
}

export class TableClothClassic implements ITableCloth {
    readonly quality: String = 'perfect';
    readonly color: String = 'white';
    readonly height: Number = 54;
    readonly width: Number = 45;
}