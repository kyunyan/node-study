/*
    파일 시스템 관련 모듈은 fs 안에 있다.

*/

const fs = require("fs");
fs.readFile("./readme.txt" , (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);      //<Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e 20> 바이너리 코드
    console.log(data.toString());
});