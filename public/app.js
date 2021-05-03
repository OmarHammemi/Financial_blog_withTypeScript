import { PAyment } from './classes/payment.js';
import { Invoice } from './classes/invoice.js';
import { ListTemplte } from './classes/Listtemplates.js';
// let docOne:Hasformater;
// let docTow:Hasformater;
// docOne=new Invoice('yoshi','web work',250);
// docTow=new PAyment('ahmed','plumb work',200);
// let docs: Hasformater[]=[];
// docs.push(docOne);
// docs.push(docTow);
// console.log(docs)
const Invone = new Invoice('omar', 'working', 250);
const Invtow = new Invoice('Ahmed', 'working', 3000);
let invoices = [];
invoices.push(Invone);
invoices.push(Invtow);
//console.log(invoices)
// invoices.forEach(inv=>{
//   console.log(inv.client,inv.amount,inv.format())
// })
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplte(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new PAyment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Generic we use the generic for dynamic use of data
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'omar', age: 23 });
console.log(docOne.age);
//with interfaces and enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["book"] = 0] = "book";
    ResourceType[ResourceType["film"] = 1] = "film";
    ResourceType[ResourceType["director"] = 2] = "director";
    ResourceType[ResourceType["person"] = 3] = "person";
})(ResourceType || (ResourceType = {}));
const docthree = {
    uid: 42455,
    resourceName: ResourceType.person,
    data: { name: 'omar' }
};
const docfor = {
    uid: 42455,
    resourceName: ResourceType.book,
    data: { name: 'the secret' }
};
//console.log(docthree,docfor);
//tuples
let arr = ['om', 745, false];
arr[0] = 'omar';
