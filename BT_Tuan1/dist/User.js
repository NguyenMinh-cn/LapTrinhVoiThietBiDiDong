var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u = new User('Alice');
console.log('User (get):', u.getName);
u.setName = 'Bob';
console.log('User (after set):', u.getName);
