/**
 삼항 연산자

let test = true ? true : false;

Threthy 와 Falsy
! 체크 
!undefined
!null
!0
!''
!NAN
!false

NAN not a number

단축평가 논리 계산법
const dog = {
    name : '멍멍이'
}

function getName(animal){
    reuturn animal && animal.name;
}

const name = getName(dog);
console.log(name);

// && 연산자 뒤에 값이 값이된다.        // 객체 안에 값을 체크할때
console.log(true && "hello");

const name = false || 'hello'
 */