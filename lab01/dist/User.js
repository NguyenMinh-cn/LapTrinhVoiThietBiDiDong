"use strict";
class User {
    constructor(name) {
        this._name = name;
    }
    get getName() {
        return this._name;
    }
    set setName(value) {
        this._name = value;
    }
}
const u = new User('Alice');
console.log('User (get):', u.getName);
u.setName = 'Bob';
console.log('User (after set):', u.getName);
