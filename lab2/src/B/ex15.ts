// 15.Call multiple async functions sequentially using await.
export async function task1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('task1'), 1000);
    });
}

export async function task2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('task2'), 3000);
    });
}

export async function task3(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('task3'), 5000);
    });
}

async function run() {
    console.time('demo');

    const t1 = await task1();
    console.log(t1);

    const t2 = await task2();
    console.log(t2);

    const t3 = await task3();
    console.log(t3);

    console.timeEnd('demo');
}
