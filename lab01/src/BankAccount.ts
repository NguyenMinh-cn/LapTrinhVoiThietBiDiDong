class BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
  // gui tien
  deposit(money:number): number {
      return this.balance = this.balance + money;
    }

  //rut tien
  withdraw(money:number): number {
    if (this.balance >= money) {
      return this.balance = this.balance - money;
    } else {
      console.log("Khong the rut tien")
      return this.balance;
    }
  }
}
const b1 = new BankAccount(300);
b1.deposit(100);
console.log("gui 100: ", b1.balance);
b1.withdraw(100);
console.log("rut 100: ", b1.balance);
b1.withdraw(300);