import {Hasformater} from '../interfaces/Hasformater.js';
//classes
export class  Invoice implements Hasformater{
    // client:string;
    // details:string;
    // amount:number;
  
    constructor(
      readonly client:string,
      private details :string,
      public amount :number,
      ){
    
    }
    format(){
      return `${this.client} ownes £${this.amount} for ${this.details}`;
    }
  }