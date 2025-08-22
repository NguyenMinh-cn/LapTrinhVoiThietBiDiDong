interface Animal {
    name: string;
    sound(): string;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return 'Gâu! Gâu!';
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return 'Meow! Meow!';
    }
}

const cat = new Cat('Mew');
const dog = new Dog('Dog');
console.log(`${cat.name} says: ${cat.sound()}`);
console.log(`${dog.name} says: ${dog.sound()}`);
