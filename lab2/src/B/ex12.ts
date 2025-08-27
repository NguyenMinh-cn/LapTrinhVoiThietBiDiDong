// 12. Write an async function that calls simulateTask(2000) and logs the result
function simulateTask(duration: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task se hoan thanh sau ${duration} ms`);
        }, duration);
    });
}

async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
}

runTask();
