import Prototype from '../interfaces/prototype';
export default class Aircraft implements Prototype {
     private engine: String;
     private color: String;
     private wings: String;
     
     constructor(prototype) {
         this.engine = prototype.engine;
         this.color = prototype.color;
         this.wings = prototype.wings;
     }

     clone() {
         return new Aircraft(this);
     }
}