"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(`Car: ${this.brand}, model: ${this.model}, year: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Car123", 2025);
car1.display();
