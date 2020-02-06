const {odd, even} = require("./var");
var checkNumber = require("./func");

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
console.log(global);

/*
    node 에는 winodw 가 없고 global 이라는 전역객체가 있다
    console.log(window);
    global 객체
    node 에서는 
    window.setTimeOut이 아닌 global.setTimeOut으로 사용
    윈도우에서는 생략 가능하기때문에 주로 setTimeout으로 사용 당연히 존재할거기때문에 window 든 global이든 
*/

