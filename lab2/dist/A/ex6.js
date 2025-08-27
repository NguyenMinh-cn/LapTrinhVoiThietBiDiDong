"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const ex5_1 = require("./ex5");
const promise1 = (0, ex5_1.simulateTask)(5000);
const promise2 = (0, ex5_1.simulateTask)(1000);
const promise3 = (0, ex5_1.simulateTask)(8000);
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
