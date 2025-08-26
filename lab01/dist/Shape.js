"use strict";
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    // implement
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
console.log('Diện tích hình vuông:', square.area());
const circle = new Circle(3);
console.log('Diện tích hình tròn:', circle.area());
