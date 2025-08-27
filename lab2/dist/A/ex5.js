"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = simulateTask;
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
// simulateTask(5000).then((result)=>{
//     console.log(result);
// })
