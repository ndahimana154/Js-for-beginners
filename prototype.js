let myCar = {
    year: '2013',
    model: 'BVNS2',
    name: 'nb'
}

let newCar = Object.create(myCar);
console.log(newCar.name);
console.log(Object.getPrototypeOf(newCar));