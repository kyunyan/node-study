/*
    노드에서는 예외처리가 중요하다.
    이러한 예외가 발생하면 노드 프로그램이 죽어버린다
    보통 멀티스레드 프로그램은 스레드 하나가 죽어도 스레드가 여러개 이기때문에 그일을 대신할수있다
    노드는 싱글스레드 이기때문에 스레드가 죽으면 전체 서버가 죽어버리기때문에
    스레드 처리가 필수이다.
*/

/**
 * try catch 가 쓰지 않는게 좋은게 에러가 낼상황이면 에러를 내보내기 전에 그전에 처리하는것이 좋다
 * async/await 처럼 어쩔 수 없이 try/catch를 써야 하는 경우도 있다.
 * 
 */

/* setInterval( () => {
    console.log("시작");
    try{
        throw new Error("서버를 고장내주마");    
    }catch(error){
        console.error(error);
    } 
    
}, 1000); */

// node 내장 모듈을 통해서 error 캐치 가능
/*
const fs = require("fs");
 
setInterval(() => {
    fs.unlink("./aasfavsav.js", (err) => {
        if(err){
            console.log("시작");
            console.log(err);
            console.log("끝");
        }
    });
}, 1000);
*/

// 예기치 못한 에러 처리 가능
// uncaughtEaception에 의존하지 말고 근본적인 에러의 원인을 해결해야된다.
// 예기치 못한 애러를 잡아주긴 하지만 근본적인 에러를 잡는게 아니라 계속 발생함
process.on("uncaughtException", (err) => {
    console.error("예기치 못한 에러", err);
    // node 무조건 살아난다는 것을 보장하지 않는다.
    // 서버를 복구하는 코드를 넣는다 , 권장하지 않는다
});

setInterval(() => {
    throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
    console.log("실행됩니다");
}, 1000)