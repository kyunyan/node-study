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

const name = false || 'hello'

함수의 기본 파라메터
function calculatCircleArea = (r = 1 ) =>  Math.PI * r * r;

조건문 더 스마트 하게 쓰기

function isAnimal(text){
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    )
}
function isAnimal(text){                    // if 문이 아닌 
    const animals = ["고양이", "개", "거북이", "너구리"];
    return animals.includes(text);
}

코드는 짧다고 좋은게 아니라 딱볼때 보이는게 좋은 코드이다.
const isAnimal = text => ["고양이", "개", "거북이", "너구리"].includes(text);

isAnimal("개")      // true

function getSound(animal){
    if(animal === '개')     return '멍멍';
    if(animal === '고양이')     return '야옹~';
}

스위치 case 문에서 retrun 을 하면 브레이크 필요없다.

function getSound(animal){
    const sounds = {
        개 : '멍멍!' ,
        고양이 : '야옹 ~ ' ,
        참새 : '짹짹' ,
        비둘기 : '구구 구 구'
    }

    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('고양이'));

function makeSound(animal){
    const tasks = {
        개 : () => {
            console.log("멍멍!");
        },
        고양이(){                   // 밑에거보다 위에게 더 나은 코드 최신 자바스크립트 객체안에 함수
            console.log('야옹!');
        },
        비둘기 : function(){

        }
    }

    return sounds[animal] || '...?';
}

// 비 구조화 할당
객체 비구조할당
const object = {a : 1 , b: 2}
const {a, b} = object;

const object = {a : 1 }
function({a, b= 2}){
    console.log(a);
    console.log(b);
}

const animal = {
    name : '멍멍이'
}
const {name : nickname} = animal;

console.log(nickname);

배열비구조화 할당
const array = [1];
const [one, two = 2] = array;

const deppObject = {
    state : {
        information : {
            name : 'velopert' , 
            languages : ['korean', 'english', 'chinese']
        }
    },
    value : 5
}

const {name , languages} = deppObject.state.information;
const value = deppObject;

// 특정 객체에 키가 같다면 키와 벨류 쓰지 않아도된다.
const extracted = {
    name,
    languages,              
    value
}

// 코드가 더럽기때문에 상황에 맞춰서 사용
비구조화 할당은 이런식으로 해줄수도 있다
const {
    state : {
        information : {
            name, languages
        }
    },value
} = deppObject;


spread 와 rest

const slime = {
    name : '슬라임' 
}

const cuteSlime = {
    ...slime , 
    attribute : 'cute'
}

const purpleCuteSlime = {
    ...cuteSlime , 
    color : 'purple'
}

const greenCuteSlime = {
    ...purpleCuteSlime , 
    color : 'green'             // color 를 위에다 선언하면 안된다.
}

const { ...rest } = greenCuteSlime;

const animals = ['개', '고양이', '참새'];
cosnt anitoeranimals = [...animals, '비둘기'];

function sum(...rest){
    return rest.reduce((acc, current) => acc+ current)
}

Scope 의 이해
scope란 변수 또는 함수를 선언할때 어디서부터 어디까지 유효한지를 나타낸다.

global scope 코드의 모든 범위
Function , block

hoisting
자바스크립트 변수 함수를 끌어올리는 자바스크립트 작동방식

코드를 보기 힘들기때문에 이런현상을 피해야한다 유지보수 힘듬

cosnt 와 let 은 호이스팅이 동작하지 않음

eslint를 사용하게되면 호이스팅이 애러로 나오기때문에 잡을수있다.

 */