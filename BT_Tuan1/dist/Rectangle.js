"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}
const r1 = new Rectangle(30, 20);
console.log("Area: ", r1.getArea());
console.log("Perimeter: ", r1.getPerimeter());
