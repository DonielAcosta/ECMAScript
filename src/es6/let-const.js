var lastName = 'Doniel';
lastName = 'Alberto';
console.log(lastName);

let fruta = 'coco';
fruta = 'parchita';
console.log(fruta);

const animal = 'perro';
animal ='gato';
    console.log(fruta1);
    console.log(animal);


const frutas= () =>{
    if(true){
        var fruta1 ='manzana'; //funcion scope
        let fruta2 ='limon'; // block scope 
        const fruta3 ='mango'; //block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

console.log(fruta1);
frutas();