const fnAsync =()=>{
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=> resolve('Async!!'),2000): reject(new Error('error!!'));
    });
}

const anotherFn = async() =>{
    const someTime = await fnAsync();
    console.log(someTime);
    console.log('prueba');

}
console.log('Before');
anotherFn();
console.log('After');