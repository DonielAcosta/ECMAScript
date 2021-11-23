const data = {
    frontend: 'Doniel',
    backend: 'Lina',
    desing:'ROxana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const datas = {
    frontend: 'Doniel',
    backend: 'Lina',
    desing:'ROxana'
}

const values = Object.values(datas);
console.log(values);


const string = 'hello';
console.log(string.padStart(7,'co'));
console.log(string.padEnd(12,'------'));
console.log('food'.padEnd(12,'------'));

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false) ? setTimeout(()=>resolve('Hello WORLD'),3000)
        : reject(new Error('TEST ERROR'))
    })
};

const helloAsync = async ()=>{
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anothorFunction = async()=>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anothorFunction();