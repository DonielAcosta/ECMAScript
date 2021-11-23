const  string = "js-2021, con javascript aprendo";
const replacedString = string.replace("js-2021","php");
console.log(replacedString);

const replacedString2 = string.replaceAll("js-2021","php");
console.log(replacedString2);

// metodos privados

class Message{
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}
const message = new Message();
message.show('hola');


// promise any

const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> resolve("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response=> console.log(response));

class anyClass{
    constructor(element){

        this.ref = new WeakRef(element)
    }
    {...}
}

let  isTrue = true;
let isFalse = false;