class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get getName(): string {
        return this._name;
    }

    set setName(value: string) {
        this._name = value;
    }
}

const u = new User('Alice');
console.log('User (get):', u.getName);
u.setName = 'Bob';
console.log('User (after set):', u.getName);
