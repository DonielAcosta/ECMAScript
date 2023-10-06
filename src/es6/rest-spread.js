// array destruturing

let fruits = ['apple','Banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);

//object destructuring

let user ={
    username:'Doniel',
    age:34
}
let{username,age} = user;
console.log(username,age);

//spread operator 

let person ={ 
    username:'Doniel',
    age:34
};
let country ='VENEZUELA';
let data ={...person,country};
console.log(data);

//rest

function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num+values[0];
}
sum(1,1,3);