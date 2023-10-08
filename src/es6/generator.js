function* iterate(array){
    for (let value of array) {
        yield value;        
    }
}

const it = iterate(['doniel','dubexy','ana','jose','alberto ']);
console.log(it.next().value);