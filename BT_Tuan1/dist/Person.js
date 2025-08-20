"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const p1 = new Person("Minh",21);
p1.display();