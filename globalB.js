const A = require("./globalA");

// global 은 전역객체이기때문에 global로 사용 가능하기때문에 모든 전역객체로 쓸수있다
// 다만 마구자비로 사용하면 문제가 생긴다. 
global.message = "안녕하세요";
console.log(A());