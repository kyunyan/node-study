const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
    console.log("1초후 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

/*
    igeon-wan-ui-MacBookPro-2:node igeon-wan$ node timer
    1초후 실행
    1.5초 후 실행
    1초후 실행
*/

// 즉시 실행되는 setImmediate 함수를 이벤트 루프로 보낼 때 사용
const im =  setImmediate(() => console.log("즉시 실행"));
clearsetImmediate(im);
// 이벤트 루프로 비동기로 실행순서를 바굴때 사용한다

//clearTimeout(timeout);
//clearInterval(interval);

// setTimeOut -> clearTimeOut으로 해제
// setInterval -> clearInterval로 해제