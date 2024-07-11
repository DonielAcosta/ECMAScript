function newUser(name,age,country){
    var name = name || 'Doniel';
    var age = age || 28;
    var country = country || 'Merida';
    console.log(name,age,country);
}

newUser();
newUser('LINA',25,'CARACAS');

function newAdmin(name='Doniel',age='28',country='VEN'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('doniel',28,'CARACAS')