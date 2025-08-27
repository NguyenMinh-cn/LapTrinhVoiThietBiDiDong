// 7. Use Promise.race() to return whichever Promise resolves first.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1")
  }, 5000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2")
  }, 2000)
})

Promise.race([p1,p2])
  .then(result => {
    console.log('p1,p2:', result) //p2 sẽ được in ra trước p1 vì p2 hoàn thành trước p1
  })
  .catch(err => {
    console.log('p1,p2', err)
  })