let arr = [1, 2, 3, 4];

function myFunction(arg){
    return arg;
}

myFunction(arr);

function myFunction2(arg) {
    return arg[1]
}

myFunction2(arr);

myFunction(['mario', 1, true]);



var obj = {
    propriedade: 'mario',
    sobreNome: 'amaral',
    home: true
}

myFunction(obj).propriedade;