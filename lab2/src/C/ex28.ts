// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
import { task1, task2, task3 } from '../B/ex15';

export async function batchProcess() {
    const results = await Promise.all([
        task1(),
        task2(),
        task3(),
        task1(),
        task2(),
    ]);
    console.log('Xong 5 task', results);
}

batchProcess();
