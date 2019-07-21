import { Director } from "./director";
import { FirstBuilder, SecondBuilder  } from "./builders/";

const firstBuilder = new FirstBuilder();
const secondBuilder = new SecondBuilder();
const director = new Director(firstBuilder);
director.make('hello');
let product = firstBuilder.getResult();
console.log(product);
director.changeBuilder(secondBuilder);
director.make("world") 
console.log(secondBuilder.getResult());
secondBuilder.reset();
console.log(secondBuilder.getResult());