class User{}

// const newUser = new User();

class user{
    //metodos
    greeting(){
        return "Hola";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const dev = new user();
console.log(dev.greeting());

// constructor
class user {
    constructor(){

        console.log('new user');
    }

    greeting(){
        return "Hola";
    }
}

const doni = new user();
//this

class user{
    constructor(name){
        this.name = name;
    }
    speak(){
        return "todo bien";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
 
const acosta = new user('Doniel');
console.log(acosta.greeting());

//setters getters

class user{
    constructor(name,age){
        this.name = name;
        this.age  = age;
    }

    speak(){
        return
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(a){
        this.age = a;
    }
}

const doni1 = new user('Doniel',27);
console.log(doni1.uAge);
console.log(doni1.uAge =29);
