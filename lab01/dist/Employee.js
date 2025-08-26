"use strict";
// 14. Create a base class Employee. Extend Manager and Developer with specific methods
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} nhận ${this.salary} đồng/tháng`;
    }
}
class Manager extends Employee {
    work() {
        console.log(`${this.name} là quản lý.`);
    }
    assignWork() {
        console.log(`${this.name} đã giao việc cho bạn.`);
    }
}
// Lớp con Developer kế thừa từ Employee
class Developer extends Employee {
    work() {
        console.log(`${this.name} là lập trình viên.`);
    }
    fixBug() {
        console.log(`${this.name} đang sửa lỗi.`);
    }
}
const manager = new Manager('Alice', 3000);
console.log(manager.getDetails());
manager.work();
manager.assignWork();
const dev = new Developer('Bob', 2000);
console.log(dev.getDetails());
dev.work();
dev.fixBug();
