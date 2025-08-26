// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    private static instance: Logger;

    constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`Log: ${new Date().toISOString()} - ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('Đăng nhập thành công.');
logger2.log('Một đăng nhập khác.');

// Kiểm tra xem cả hai có phải cùng 1 instance không
console.log('Cùng instance?', logger1 === logger2);
