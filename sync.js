const fs = require("fs");

console.log("시작");        // fs는 동기 메소드를 지원한다 blocking nonblockin

// fs메서드들은 뒤에 Sync를 붙이면 동기식으로 작동
// fs.writeFile((err,data) => {})
// const data = fs.writeFileSync();
let data = fs.readFileSync("./readme.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme.txt");
console.log("2번", data.toString()); 
data = fs.readFileSync("./readme.txt");
console.log("3번", data.toString());

console.log("끝");