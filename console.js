/*
    console 객체 안에 디버깅을 도와주는 많은 메서드가 존재한다
    console 객체안에 엄청 많은 메서드 들이 존재 

    console.log 여러번쓸것을 console.table 을 사용해서 
*/

const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : "value"   
        }
    }
}
// console.time("인자") console.timeEnd("인자") 인자가 같아야 그 사이의 시간을 잽니다.

console.time("전체 시간");          // 성능을 체크할때 주로 사용한다.
console.log("평범한 로그입니다 . 쉼표로 구분해 여러 값을 찍을 수 있습니다");
console.log(String, number, boolean);
console.error("에러 메세지는 console.error에 담아주세요");

console.dir(obj, {colors : false, dept : 2});  // 객체 전용 로그 
console.dir(obj, {colors : true, dept : 1});  // 객체 전용 로그 

console.time("시간 측정");
for(let i=0; i< 100000; i++){
    continue;
}
console.timeEnd("시간 측정");

// console.trace 호출 순서를 알려준다
// 어떤 함수를 거쳐서 나오는지 알수있다.
function b(){
    console.trace("에러 위치 추적");
 }
function a(){
    b();
}
a();


console.timeEnd("전체 시간");