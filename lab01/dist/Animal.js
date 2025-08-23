"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return 'Gâu! Gâu!';
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return 'Meow! Meow!';
    }
}
const cat = new Cat('Mew');
const dog = new Dog('Dog');
console.log(`${cat.name} says: ${cat.sound()}`);
console.log(`${dog.name} says: ${dog.sound()}`);
