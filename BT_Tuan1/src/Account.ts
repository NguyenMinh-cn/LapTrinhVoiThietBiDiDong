class Account {
    public owner: string;
    private balance: number;
    // readonly field: chỉ gán 1 lần, không thể thay đổi sau khi khởi tạo
    readonly accountNumber: string;

    constructor(owner: string, accountNumber: string, balance: number) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

const acc = new Account('Alice', 'AC12345', 1000);

console.log('Account number:', acc.accountNumber); // readonly -> chỉ đọc được
