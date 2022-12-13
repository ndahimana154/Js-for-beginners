// Dont do this it's unproffessional
// var myVariable = ' I am at global scope';

// Atleat do this
// var myFunctin = function() {
//     console.log('Me also am global!');
// }

function two() {
    return function() {
        console.log('Two');
    }
}

let fxTwo=two();
fxTwo();