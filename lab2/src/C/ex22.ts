//22. Call the API multiple times and log the results.
async function getTodo22(id: number) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        const data = await response.json(); // chuyển kết quả thành JSON

        console.log('Dữ liệu nhận được:', data);
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    }
}

async function getTodos(ids: number[]) {
    console.time('getTodos');
    for (const id of ids) {
        const todo = await getTodo22(id);
    }
    console.timeEnd('getTodos');
}

getTodos([1, 2, 3, 4, 5]);
