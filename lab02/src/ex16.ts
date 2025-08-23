//16. Call multiple async functions in parallel using Promise.all().
async function task1(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("task1"), 1000);
  });
}

async function task2(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("task2"), 1000);
  });
}

async function task3(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("task3"), 1000);
  });
}

async function run() {
  console.time("demo");
  // chạy cùng lúc 3 hàm async
  const [t1, t2, t3] = await Promise.all([
    task1(),
    task2(),
    task3()
  ]);

  console.log(t1);
  console.log(t2);
  console.log(t3);

  console.timeEnd("demo"); 
}

run();