// 21. Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
    const data = await response.json();// chuyển kết quả thành JSON
    
    console.log("Dữ liệu nhận được:", data);
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
  }
}

getTodo();
