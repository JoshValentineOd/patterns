import { IAbstractFactory } from "../interfaces/index";
import { ChairGothic, TableGothic, TableClothGothic } from "../products/index";

export class GothicFactory implements IAbstractFactory {

    createChair(): ChairGothic {
        return new ChairGothic();
    }
    createTable(): TableGothic {
        return new TableGothic();
    }
    createTableCloth(): TableClothGothic {
        return new TableClothGothic();
    }

}

