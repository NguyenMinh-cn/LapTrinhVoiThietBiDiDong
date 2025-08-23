// 15.Call multiple async functions sequentially using await.
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

  const t1 = await task1();
  console.log(t1);

  const t2 = await task2(); 
  console.log(t2);

  const t3 = await task3(); 
  console.log(t3);

  console.timeEnd("demo");
}

run();
