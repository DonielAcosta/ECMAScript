
class user{
    constructor(name,age){
        this.name = name;
        this.age  = age;
    }
    #speak(){
        return
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(a){
        this.age = a;
    }
}

const doni1 = new user('Doniel',27);
console.log(doni1.uAge);
console.log(doni1.uAge =29);
