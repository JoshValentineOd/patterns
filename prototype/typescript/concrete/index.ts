import Aircraft from "./aircraft/aircraft";

const BossingOt = new Aircraft({engine: "Wolf", color: "White", wings:"Angel"});
const BossingOtCopy = BossingOt.clone();
console.log(BossingOt);
console.log(BossingOtCopy);
console.log(BossingOt === BossingOtCopy);