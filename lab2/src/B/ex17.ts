// 17. Use for await...of to iterate over an array of Promises.
import { task1, task2, task3 } from './ex15';
async function run17() {
    const tasks = [task1(), task2(), task3()];
    for await (const result of tasks) {
        console.log(result);
    }

    console.log('Tất cả task đã xong');
}

run17();
