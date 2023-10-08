const user ={
    username:'doni',
    age:27,
    country: 'ven'
}

const {username, ...values} = user;
console.log(username);
console.log(values);
