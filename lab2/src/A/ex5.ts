// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
export function simulateTask(time: number) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
// simulateTask(5000).then((result)=>{
//     console.log(result);
// })