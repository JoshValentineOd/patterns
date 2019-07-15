import { Director } from "./director";
import { FirstBuilder, SecondBuilder  } from "./builders/";

const firstBuilder = new FirstBuilder();
const secondBuilder = new SecondBuilder();
const director = new Director(firstBuilder);
director.make('hello');
let product = firstBuilder.getResult();
console.log(product);
