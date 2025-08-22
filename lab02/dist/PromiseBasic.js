"use strict";
//1.Create a Promise that returns the string "Hello Async" after 2 seconds
const helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});
// helloAsync.then((m) => console.log(m));
//2. Write a function that returns a Promise resolving with the number 10 after 1 second
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
getNumber().then(console.log);
