/* var car = {
    made: 'BMW',
    model: 'V154NB',
    owner: 'izikzo',
    price: function(carPrice) {
        // console.log('The price: '+ carPrice);
        return carPrice;
    },
    description: function() {
        console.log('This '+ this.made +' with Model: '+ this.model + ' Costs $'+ this.price(7000));
    }
}
car.description(); */
/* 
function first() {
    return this;
}
console.log(first() === global);
 */

/* function second() {
    'use strict';
    return this;
}
console.log(second() === global);
 */
 
/* 
let myObject = {
    value: 'MyObject'
};
console.log(myObject.value);
// Value is set on the global object
globalThis.value = 'Global Object';
function third() {
    return this.value;
}

console.log(third());
console.log(third.call(myObject)); */



function myNames(firstName,lastName) {
    console.log(this.firstName +' '+ this.lastName);
}
let name1 = {
    firstName: 'Ndahimana',
    lastName: 'Bonheur',
    printNames: myNames(this.firstName,this.lastName)
};
name1.printNames;
