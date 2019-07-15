import { ITable } from "../interfaces/index";

export class TableGothic implements ITable {
    readonly color: string = 'black';
    readonly legsAmount: Number = 4;
    readonly material: String = 'wood';
};

export class TableClassic implements ITable {
    readonly color = 'white';
    readonly legsAmount = 1;
    readonly material = 'wood'
}
