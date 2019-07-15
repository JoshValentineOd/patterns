import { IChair, ITable, ITableCloth } from "./index";

export interface IAbstractFactory {
    createChair(): IChair;
    createTable(): ITable;
    createTableCloth(): ITableCloth;
};