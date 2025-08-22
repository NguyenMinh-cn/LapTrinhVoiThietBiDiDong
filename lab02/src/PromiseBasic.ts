const helloAsync = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});

helloAsync.then((m) => console.log(m));
