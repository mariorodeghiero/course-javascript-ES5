function mario() {
    let dados = {
        cpf: "000.000.00-00",
        name: "Mario"
    }
    return dados;
}


console.log(mario().cpf)
console.log(mario().name)

// Onother example

let car = {
    color: "yellow"
}

function getCarColor(mycar) {
    return mycar.color;
}

console.log(getCarColor(car));