// 여기서 사용할 변수를 불러와서 사용하는것이 실수를  방지 할수있다 . 
// 사용할 변수들을 불러온다.
/*
    const 변수 = require("./var");
*/


// var.js 에 있는 odd , even을 불러온다
// 비구조화 할당을 사용해서 불러온다 . 
const {odd, even} = require("./var");

// 비구조화 할당을 사용안할시
/*
    const variable = require("./var");

    console.log(variable.odd);
    console.log(variable.even);
*/

// html에서 사용하는 스크립트 입포트 대신 좀더 명시적으로 어떤 변수를 어디에서 받아서 사용하겠다 사용
console.log("func.js" + odd);
console.log("func.js" + even);

function checkOddOrEven(num){
    if(num % 2){        // 홀수면
        return odd;
    }
    return even;
}

// 꼬리에 꼬리를 물고 모듈로 나눠서 실무에서 사용된다. 
// 모듈은 여러번 재 사용될수 있습니다 var.js는 func.js 와 index.js 에서 사용됩니다. 
module.exports = checkOddOrEven;
//module.exports = {odd ,even};       // 함수나 변수 아무거나 다 내보낼수 있다.

