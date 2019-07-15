import { IChair } from "../interfaces/index";

export class ChairGothic implements IChair {
    readonly material: String = 'wood';
    readonly color: String = 'black';
    readonly legsAmount: Number = 4;
    readonly chairBack: Boolean = true;
}

export class ChairClassic implements IChair {
    readonly material: String = 'wood';
    readonly color: String = 'white';
    readonly legsAmount: Number = 1;
    readonly chairBack: Boolean = false;
}