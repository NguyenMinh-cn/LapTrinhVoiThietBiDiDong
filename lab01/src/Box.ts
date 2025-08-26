// 16. Create a generic class Box that can store any type of value.
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T) {
        this.value = newValue;
    }
}

// number
const numberBox = new Box<number>(123);
console.log('Number:', numberBox.getValue());

// string
const stringBox = new Box<string>('Hello TypeScript');
console.log('String:', stringBox.getValue());

// object
const objectBox = new Box<{ name: string; age: number }>({
    name: 'Alice',
    age: 25,
});
console.log('Object:', objectBox.getValue());
