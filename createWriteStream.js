
const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish" , () => {
    console.log("파일 쓰기 완료");
});

/*
    스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있습니다.
    스트림 간에는 파이브라는 기능이 있다 
    파이프라는 기능을 통해서 스트림간에 이어지는 기능을 구현 할 수 있다 . 
*/

writeStream.write("이 글을 씁니다 \n");
writeStream.write("한 번 더 씁니다. ");
writeStream.end();