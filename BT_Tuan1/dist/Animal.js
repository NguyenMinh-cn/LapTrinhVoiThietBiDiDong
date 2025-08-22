var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        return 'Gâu! Gâu!';
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.sound = function () {
        return 'Meow! Meow!';
    };
    return Cat;
}());
var cat = new Cat('Mew');
var dog = new Dog('Dog');
console.log("".concat(cat.name, " says: ").concat(cat.sound()));
console.log("".concat(dog.name, " says: ").concat(dog.sound()));
