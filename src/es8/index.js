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