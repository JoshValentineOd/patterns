import { CarBuilder, ManualBuilder } from "./builders";
import { Director } from "./director/director";


const carBuilder = new CarBuilder();
const manualBuilder = new ManualBuilder();
const director = new Director(carBuilder);
director.makeSUV()
console.log(carBuilder.getResult());
director.builder = manualBuilder;
director.makeSUV();
console.log(manualBuilder.getResult());