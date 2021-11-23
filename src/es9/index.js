const obj = {
    name: 'Doniel',
    lasname: 'Acosta',
    age:'26',
    country:'Venezuela'
};

let {name, ...all} = obj;
console.log(name, all);

const obj = {
    name: 'Doniel',
    lastname: 'Acosta',
    age:'26'

}

const obj1 = {
    ...obj,
    country: 'Venezuela'
}

console.log(obj1);


const helloWOrld = () =>{
    return new Promise((resolve, reject)=>{
        (true) 
        ? setTimeout (()=> resolve('Hola que tal'),4000)
        : reject(new Error('test Error'))
    });
};
// Si la promesa NO se resuelve .finally igualmente se dispara (siempre se ejecutará, no importa si la promesa se cumple o no)

helloWOrld()
    .then(Response => console.log(Response))
    .catch(error=> console.log(error))
    .finally(() =>console.log('finalizo'));

    ES9

// **spread **: permite manipular partes de un objeto es decir destructurar o estructura un objeto then/catch/finally: ahora podemos tener un funciona que permita saber cuando terminó una promesa./miRegexString/.exec() : ahora permite obtener los grupos en un arreglo.


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('1995-11-18');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);