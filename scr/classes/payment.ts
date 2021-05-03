import {Hasformater} from '../interfaces/Hasformater.js';
//classes
export class  PAyment implements Hasformater{
    // client:string;
    // details:string;
    // amount:number;
  
    constructor(
      readonly recipient:string,
      private details :string,
      public amount :number,
      ){
    
    }
    format(){
      return `${this.recipient} ownes £${this.amount} for ${this.details}`;
    }
  }