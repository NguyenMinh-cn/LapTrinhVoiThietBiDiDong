"use strict";
// 16. Create a generic class Box that can store any type of value.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
// number
const numberBox = new Box(123);
console.log('Number:', numberBox.getValue());
// string
const stringBox = new Box('Hello TypeScript');
console.log('String:', stringBox.getValue());
// object
const objectBox = new Box({
    name: 'Alice',
    age: 25,
});
console.log('Object:', objectBox.getValue());
