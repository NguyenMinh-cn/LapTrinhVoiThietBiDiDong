// 26. Use async/await with setTimeout to simulate a 5-second wait
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run26() {
    console.log('Bắt đầu');
    await sleep(5000);
    console.log('Đã chờ 5 giây xong!');
}

run26();
