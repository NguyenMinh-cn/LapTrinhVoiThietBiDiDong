"use strict";
const helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});
helloAsync.then((m) => console.log(m));
