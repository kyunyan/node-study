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

NAN not a number        1  * "fasfas"

단축평가 논리 계산법
const dog = {
    name : '멍멍이'
}

function getName(animal){
    reuturn animal && animal.name;      // 앞이 true 라면 뒤에게 값이된다
}

const name = getName(dog);
console.log(name);          // && 연산자 뒤에 값이 값이된다.        // 객체 안에 값을 체크할때

console.log( dog && dog.name);

const namelessDog = {
    name : '뭉뭉이'
}

function getName(animal){
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.'
}

const name = getName(namelessDog);

const name = false || 'hello'       // 문자열이나 숫자나 하나의 값을 처리할때 

// 함수의 기본 파라메터
function calculateCircleArea(r = 1){        // 기본값 지정
    return Math.PI * r * r;
}
const area = calculateCircleArea();

 */