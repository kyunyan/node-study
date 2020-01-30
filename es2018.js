/* es6 - > es2015
    자바스크리브는 1년마나다 버전이 달라진다 .
    ECMA는 자바스크립트 표준!! 
    브라우저들이 브라우저에 구현
    es는 표준  javascript 는 구현 
*/
if(true){
    var x = 3;      // var 는 function scope
}
console.log(x);

if(true){
    const y = 3;        // const let 은 블록 스코프 
}
// const 는 상수로 보면 됨 재할당(=) 불가 
// conet e ; 이런식으로 사용 불가능 재정의가 불가능 하기때문에
// const g = {a: 1 ,b: 2} 객체 안에 값은 변경 가능   
// let 은 제정의 가능 
console.log(y);



