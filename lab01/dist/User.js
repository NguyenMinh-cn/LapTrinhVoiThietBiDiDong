"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
exports.User = User;
const u = new User('Alice');
console.log('User (get):', u.getName);
u.setName = 'Bob';
console.log('User (after set):', u.getName);
