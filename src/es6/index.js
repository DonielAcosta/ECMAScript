// function newFunction(name, age, country) {
//   var name = name || 'oscar';
//   var age = age || 32;
//   var country = country || 'MX';
//   console.log(name, age, country);
// }

// // es6
// function newFunction2(name = 'oscar', age = 32, country = "MX") {
//   console.log(name, age, country);
// };

// newFunction2();
// newFunction2('Ricardo', '23', 'CO');

// let hello = "Hello";
// let world = "World";
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
//   + "otra frase epica que necesitamos."

// // es6
// let lorem2 = `otra frase epica que necesitamos
// ahora es otra frase epica
// `;

// console.log(lorem);
// console.log(lorem2);

// let person = {
//   'name': 'oscar',
//   'age': 32,
//   'country': 'MX'
// }

// console.log(person.name, person.age);

// let { name } = person;
// console.log(name);

// let team1 = ['Oscar', 'Julian', 'Ricardo'];
// let team2 = ['Valeria', 'Yesica', 'Camila'];

// let education = ['David', ...team1, ...team2];

// console.log(education);

// {
//   var globalVar = "Global Var";
// }

// {
//   let globalLet = 'Global Let';
//   console.log(globalLet);
// }

// console.log(globalVar);

// const a = 'b';
// a = 'a';
// console.log(a);

function newFunction(name,age,country){
  var name = name || 'Doniel';
  var age = age || 26;
  var country = country || 'Venezuela';
  console.log(name,age,country);
}

//ES6

function newFunction2(name='Doniel',age = 26, country ='Venezuela'){
  console.log(name,age,country);
}

newFunction2();
newFunction2('lina','24','Merida');


//
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let loren = "Aprendiendo EmaScript \n" + "Con PLATZI ";

//es6
let loren2 = `OTRA QUE NECESITAMOS
AHORA ES NUEVA FRASE
`;

console.log(loren);
console.log(loren2);

let person = {
  'name': 'Doniel',
  'age': 23,
  'country': 'Venezuela'
}

console.log(person.name, person.age);


let{ name, age, country }= person;

console.log(name);


let team1 = ['Doniel', 'Julian', 'Miguel'];
let team2 = ['Ruben', 'Maibe', 'Fatima'];

let education = ['Andres', ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet ='Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

a = 'a';
console.log(a);

let name = 'Doniel';
let age = 26;

//es5
obj = {name: name, age: age};
//es6
obj2 = {
  name,
  age
};

console.log(obj2);


const names = [
  {name:'Doniel', age: 26},
  {name:'Lina', age: 24},
];

let listOfnames = names.map(function(item){
  console.log(item.name);
})

let listOfnames2 = names.map(
    item => console.log(item.name)
);

const listOfnames3 = (name, age, country) =>{
  ...
};

const listOfnames4 = name =>{
  ...
}

const square = num => num * num;

//promesas para trabajara asicronismo

const helloPromise = ( )=>{
  return new Promise((resorlve,reject)=>{
    if(true){
      resorlve('Todo BIEN!');
    }else{
      reject('Algo PAso!!!');
    }
  });
}


helloPromise()
  .then(Response => console.log(Response))
  .then(()=> console.log('calidad'))
  .catch(error => console.log(error));