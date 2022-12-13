let car = {
    name: 'Volkswagen',
    model: 'VBL1293',
    year: 2008,
    price: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.name +' '+ this.model);
    }
};
car.printDescription();
console.log(car.year);
console.log(car['year']);

var anotherCar = {};
anotherCar.name = 'ndb v212';

console.log(anotherCar.name);

