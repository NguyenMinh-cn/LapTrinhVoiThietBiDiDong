// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function ex14(num: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return num * 3;
}

ex14(15).then(result => {
  console.log("Kết quả:", result);
});
