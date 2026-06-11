const today = new Date();

const year = today.getFullYear() - 2;
const month = today.getMonth() + 5;
const day = today.getDate() + 1;

console.log(`${year}年${month}月${day}日`);