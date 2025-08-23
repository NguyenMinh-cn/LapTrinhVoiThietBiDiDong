"use strict";
class Bird {
    fly() {
        console.log("The bird is flying");
    }
}
class Fish {
    swim() {
        console.log("The fish is swimming");
    }
}
const bird = new Bird();
const fish = new Fish();
bird.fly();
fish.swim();
