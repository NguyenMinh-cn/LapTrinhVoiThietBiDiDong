// 14. Create a base class Employee. Extend Manager and Developer with specific methods
abstract class Employee {
    constructor(public name: string, public salary: number) {}

    getDetails(): string {
        return `${this.name} nhận ${this.salary} đồng/tháng`;
    }

    // Phương thức cho các class con override
    abstract work(): void;
}

class Manager extends Employee {
    work(): void {
        console.log(`${this.name} là quản lý.`);
    }

    assignWork(): void {
        console.log(`${this.name} đã giao việc cho bạn.`);
    }
}

// Lớp con Developer kế thừa từ Employee
class Developer extends Employee {
    work(): void {
        console.log(`${this.name} là lập trình viên.`);
    }

    fixBug(): void {
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
