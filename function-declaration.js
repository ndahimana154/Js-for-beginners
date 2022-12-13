// let name;
// function sayHello(name) {
//     console.log('----------------------------');
//     console.log('Hello '+ name);
//     console.log('----------------------------');
// }
// sayHello('ndahimana'); 

function calculateTax(amount) {
    let tax = amount * 0.825;
    return tax;
}
let taxAmt = calculateTax(1.20);
console.log(taxAmt);
