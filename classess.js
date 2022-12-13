class Car{
    constructor(made, model, year) {
        this.made = made;
        this.model = model;
        this.year = year;
    }
    printDara() {
        console.log(`Made by: ${this.made}, Model: ${this.model}, Year: ${this.year} `);
    }
}

let bonCar = new Car('Volkswagen', 'VB23', '2022');
console.log(bonCar.printDara());

class sportsCar extends Car{

}
let mySportsCar = new sportsCar('Dodge', 'Viper', 2011);

mySportsCar.printDara();