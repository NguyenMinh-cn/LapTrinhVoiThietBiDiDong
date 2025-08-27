// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function rejectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000); 
  });
}
rejectPromise()
    .then(() => {
        console.log("Success.");
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
