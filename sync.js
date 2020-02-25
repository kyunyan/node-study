const fs = require("fs");

console.log("시작");        // fs는 동기 메소드를 지원한다 blocking nonblockin

// fs메서드들은 뒤에 Sync를 붙이면 동기식으로 작동
// fs.writeFile((err,data) => {})
// const data = fs.writeFileSync();

// readFilesync 메소드보다 그냥 readfile을 사용한다
// 왜냐하면 sync메소드를 쓰다보면 서버에 요청이 오래걸리때 다른일을 못하기때문에
let data = fs.readFileSync("./readme.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme.txt");
console.log("2번", data.toString()); 
data = fs.readFileSync("./readme.txt");
console.log("3번", data.toString());

console.log("끝");

/*
    DATA PASSED ON <---------- BUFFER <- DATA           data를 버퍼에 채운다.
                                                        data가 오는데 공간에 다 찰때까지 기다리는 시간을 버퍼링이라고한다 

    큰 데이터가 있을때 이 큰 데이타를 한번에 보낼수가 없다. 조금씩 때어서 전송을 해야되는데 작은 저장잔치 버퍼라는 것을 이용해서 옮기는데 
    버퍼가 가득채워지면 옮겨지고 채워지면 옮겨지고 이런식으로 움직인다 이런식으로 움직이는 것을 버퍼링 이라고 한다. 

    스트리밍~
            찬버퍼    <------------  Buffer <- DATA
*/