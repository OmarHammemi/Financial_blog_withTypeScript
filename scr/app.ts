import {Hasformater} from './interfaces/Hasformater.js'
import {PAyment} from'./classes/payment.js'
import {Invoice} from'./classes/invoice.js'
import { ListTemplte } from './classes/Listtemplates.js';

// let docOne:Hasformater;
// let docTow:Hasformater;

// docOne=new Invoice('yoshi','web work',250);
// docTow=new PAyment('ahmed','plumb work',200);


// let docs: Hasformater[]=[];
// docs.push(docOne);
// docs.push(docTow);

// console.log(docs)

const Invone = new Invoice('omar','working',250);
const Invtow = new Invoice('Ahmed','working',3000);

let invoices: Invoice[]=[];
invoices.push(Invone);
invoices.push(Invtow);
//console.log(invoices)

// invoices.forEach(inv=>{
//   console.log(inv.client,inv.amount,inv.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplte(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
 let values:[string,string,number];
 values= [tofrom.value,details.value,amount.valueAsNumber]

  let doc: Hasformater;
  if(type.value=='invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new PAyment(...values);
  }
    list.render(doc, type.value, 'end');
});

//Generic we use the generic for dynamic use of data

const addUID = <T extends {name: string}>(obj:T )=>{
  let uid = Math.floor(Math.random()*100);
  return{...obj, uid};
}
let docOne = addUID({name:'omar',age:23});
console.log(docOne.age);
//with interfaces and enum
enum ResourceType { book, film, director,person}

interface Resource<T>{
  uid: number;
  resourceName:ResourceType;
  data:T;
}

const docthree:Resource<object>={
  uid:42455,
  resourceName:ResourceType.person,
  data:{name:'omar'}
}
const docfor:Resource<object>={
  uid:42455,
  resourceName:ResourceType.book,
  data:{name:'the secret'}
}
//console.log(docthree,docfor);

//tuples

let arr:[string,number,boolean]=['om',745,false];
arr[0]='omar'