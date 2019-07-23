import Goverment from './Goverment';

const gov = Goverment.getInstance();
const secGov = Goverment.getInstance();
console.log(gov);
console.log(secGov);
console.log(gov === secGov);