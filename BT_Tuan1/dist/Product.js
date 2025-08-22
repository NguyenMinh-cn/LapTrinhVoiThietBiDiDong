"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const products = [
    new Product('Pen', 10),
    new Product('Headphones', 250),
    new Product('Notebook', 120),
    new Product('Cup', 50),
];
const pro_expensive = products.filter((p) => p.price > 100);
console.log('Products price > 100:', pro_expensive.map((p) => `${p.name} (${p.price})`));
