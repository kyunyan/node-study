
const http = require("http");
/**
  http 모듈을 이용하여 서버프로그램으로 만들어준다

  노드 자체가 서버가 아니다 노드는 런타임
  http 모듈이 서버역활을 하는거고 http 모듈을 이용하여 서버로 만들어준다.
 */

 /*
 http.createServer((req, res) => {   // 방문이라는 것이 기본적으로 세팅 되어있다.
    console.log("서버 실행");       // 사람들이 서버에 들어오면 자동적으로 실행 
    // 요청이 왓을때 꼭 수락해야 하는 것은 아니고, 거절할 수도 있습니다.
     res.write("<h1>Hello Node! </h1>");
     res.write("<h2>Hello JS! </h2>");
     res.end("<p>Hello Server! </p>");          // 더 이상 작성할 것 없어라는 의미이다.
}).listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중입니다.");      
    /* http 기본 포트(80)
       https(443) 기본 포트는 생략 가능 https는 443이 숨어져 있다.
       포트가 다르면 호스트가 같더라도 다른 사이트처럼 동작할 수 있습니다.
       1024 아래 포트는 다른 프로그램이 사용 중일 확률이 높아요. 
       또 리눅스가 맥에서는 관리자 권한이 필요
     
});        
*/

const fs = require("fs");

const server = http.createServer((req, res) => {   // 방문이라는 것이 기본적으로 세팅 되어있다.
    console.log("서버 실행");       // 사람들이 서버에 들어오면 자동적으로 실행 
    fs.readFile("./server2.html", (err, data) => {      // data 가 퍼버
        if(err){
            throw err;
        }
        // 서버로 부터 버퍼를 받은다음에 아라서 랜더링 한다.
        // 화면에 표시한는 것은 브라우저의 역활
        // 노드서버의 역활은 버퍼인 데이터를 브라우저로 보내는 것만 역활
        // 여기서 axios .get("/www.geogle.com");
        // 구글 한테 요청을 보낼시 내서버는 클라이언트 구글은 서버
        // 서버라는 것이 절대적인것이 아니라 누가 요청을 보내고 누가 응답을 하느냐에따라 달라진다.
        res.end(data);
    });
}).listen(8081);

server.on("listening", () => {
    console.log("8080번 포트에서 서버 대기중입니다.");      
}); 

// node는 에러에 취약하기 때문에 error에 대비해야된다.
server.on("error", (error) =>  {
    console.error(error);
});