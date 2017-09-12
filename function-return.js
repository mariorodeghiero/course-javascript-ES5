function myFunction() {
    return {
        prop1: 1,
        prop2: 'mario',
        prop3: function(){
            return 'prop3';
        }
    }
}

myFunction();
myFunction().prop1;

var values = myFunction();

console.log('------------------------------------');
console.log(values);
console.log('------------------------------------');


values.prop1;
