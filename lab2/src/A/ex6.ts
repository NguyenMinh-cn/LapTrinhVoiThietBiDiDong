// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
import { simulateTask } from "./ex5";

const promise1 = simulateTask(5000);
const promise2 = simulateTask(1000);
const promise3 = simulateTask(8000);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});