function myFunction(params) {
    function sum() {
        return num1 + num2;
    }
    let num1 = 1;
    let num2 = 2;
    return sum();
}

console.log(myFunction())