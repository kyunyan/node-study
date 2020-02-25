
const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", {highWaterMark : 16});      // highWaterMark 몇 바이트씩 읽겟느냐 16바이트
// 16 바이트 버퍼를 읽으면 보내고 또 16바이트 읽으면 보내고 이런식으로 읽는다. 
const data = [];

readStream.on("data", (chunk) => {
    data.push(chunk);
    console.log("data", chunk, chunk.length );
});

/*
    스트림은 이벤트 기반으로 동작합니다 . 
    data ,end , error ... 버퍼(청크) 들이 들어올 때마다 data 이벤트가 발생합니다. 
*/

// 다끝나면 end 이벤트가 발생  버퍼도 global 객체이다. 
readStream.on("end" , () => {
    console.log("end" , Buffer.concat(data).toString());        // 버퍼를 concat으로 합처서 사람이 읽을수 있게 만들어 준다. 
});

readStream.on("error", (err) => {
    console.log("error", err);
});

// 이런 형태로 스트리밍이라고 한다.