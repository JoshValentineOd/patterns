import { IAbstractFactory } from "../interfaces/index";
import { ChairClassic, TableClassic, TableClothClassic } from "../products/index";

export class ClassicFactory implements IAbstractFactory {

    createChair(): ChairClassic {
        return new ChairClassic();
    }
    createTable(): TableClassic {
        return new TableClassic();
    }
    createTableCloth(): TableClothClassic {
        return new TableClothClassic();
    }

}

