const http = require('http');

const server = http.createServer((req,res) => {
    console.log("서버실행중입니다. ");
}).listen(8084);