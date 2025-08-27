"use strict";
//4. Use .then() and .catch() to handle a Promise that returns a random number
function getRandomNumber() {
    return new Promise((resolve) => {
        const num = Math.floor(Math.random() * 10); // số ngẫu nhiên 0-9
        resolve(num);
    });
}
getRandomNumber().then((result) => {
    console.log(result);
})
    .catch(error => {
    console.error("Error:", error.message);
});
