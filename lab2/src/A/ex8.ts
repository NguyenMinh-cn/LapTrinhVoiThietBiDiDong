// 8. Create a Promise chain: square the number 2, then double it, then add 5.
function calculator() {
    return new Promise<number>((resolve) => {
        resolve(2); 
    })
    .then(result => {
        console.log("Bắt đầu với:", result);  // 2
        const squared = result * result;
        console.log("Sau khi bình phương:", squared);// 4
        return squared;
    })
    .then(result => {
        const doubled = result * 2;
        console.log("Sau khi nhân đôi:", doubled);// 8
        return doubled;
    })
    .then(result => {
        const added = result + 5;
        console.log("Sau khi cộng 5:", added);// 13
        return added;
    });
}

calculator().then(value => {
    console.log("Kết quả cuối cùng:", value);  
});
