import { task1, task2, task3 } from './ex15';
async function runParallel() {
    console.time('parallel');

    const [t1, t2, t3] = await Promise.all([task1(), task2(), task3()]);
    console.log(t1, t2, t3);

    console.timeEnd('parallel');
}
runParallel();
