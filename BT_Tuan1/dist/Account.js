var Account = /** @class */ (function () {
    function Account(owner, accountNumber, balance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    return Account;
}());
var acc = new Account('Alice', 'AC12345', 1000);
console.log('Account number:', acc.accountNumber); // readonly -> chỉ đọc được
