
const fs = require("fs");
const zlib = require("zlib");           // 파일을 압축하는 모듈

/*
    스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있습니다.
*/

const zlibStream = zlib.createGzip();           // 이렇게 하면 파일이 압축된다.
const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("writeme5.txt");
readStream.pipe(zlibStream).pipe(writeStream);
// 파이프는 연달아 스트림간에 사용할수 있다.
// 스트림 끼리는 계속 파이핀을 할수있다.
// readStream.pipe(writeStream).pipe().pipe();
// 이런거를 언제쓰냐면 


// 복사랑 비슷 readme4를 읽어서 writeme3에 넣는다 .
readStream.pipe(writeStream);

// 전에는 스트림 두개 연결해서 해줫는데 지금은 copyfile 이라는 메소드를 통해서 보낸다

const readStream1 = fs.copyFile("./readme4.txt" , "./writeme4.txt" , (err) => {
    console.log(err);
});