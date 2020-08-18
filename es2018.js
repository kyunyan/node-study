/* es6 - > es2015
    자바스크리브는 1년마나다 버전이 달라진다 .
    ECMA는 자바스크립트 표준!! 
    브라우저들이 브라우저에 구현
    es는 표준  javascript 는 구현 
*/

// const 와 let 
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

// 탬플릿 문자열(백틱, ')
const a = "hello";
undefined
const b = true;
undefined
const c = 3;
undefined
let d = `${a}의 값은 ${b}이고 ${c}는 몰라요`;
"hello의 값은 true이고 3는 몰라요"

// 백틱을 쓰면 장점이 따음표간에 구분을 하지 않고 사용할수 있어 매우 편리하다. 

// 객체 리터럴
/* 중괄호 안에 객체 형태로 나타내는 것을 객체 리터럴  */
var sayNode = function(){
    console.log("Node");
}
undefined
var es = "ES";
undefined
var oldObject = {
    sayJs : function(){
        console.log("JS");
    },
    sayNode : sayNode 
};
undefined
oldObject[es+6] = "Fantastic";
"Fantastic"
oldObject
// {ES6: "Fantastic", sayJs: ƒ, sayNode: ƒ}

// 불필요하게 키 벨류 쓰는 게 많은데
// {data : data , value : value }
// {data , value}               이런식으로 사용 가능
// 동적할당 사용 가능
let newObject2 = {
    sayJs(){
        console.log(`JS`);
    },
    sayNode,
    [es + 6] : `Fantastic`,
};

newObject2.sayNode();
newObject2.sayJs();
console.log(newObject2.ES6);

// 화살표 함수
// 함수 선언문
function add1(x,y){
    return x+y;
}

// 함수 표현식 
var add2 = function(x,y){
    return x+y;
}

// es6 에서는
const add3 = (x,y) => {
    return x+y;
}

const add4 = (x,y) => x+y; // 중괄호가 없거나 (x+y) 소괄호면 바로 리턴 시키는 구나 알면됨

// function 과 화살표 함수의 가장 큰 차이가 this 이다

var relationship1 = {
    name : "zero" ,
    friends : ["nero", "hero", "xero"],
    logFriends : function(){
        var that = this;            // function 내부의 this는 외부의 this와 다르기 때문에 this를 that에 저장하여 사용
       console.log(that);
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    }
}
relationship1.logFriends()
//{name: "zero", friends: Array(3), logFriends: ƒ}
//zero nero
//zero hero
//zero xero

// es 6 같은 결과 this를 상황에 따라서 사용할수 있다.  
var relationship2 = {
    name : "zero" ,
    friends : ["nero", "hero", "xero"],
    logFriends(){
        var that = this;
        console.log(that);
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
}

relationship2.logFriends();


// 비구조화 할당(destructuring)
var candyMachine = {
    status : {
        name : "node",
        count : 5,
    },
    getCandy : function(){
        this.status.cout--;
        return this.status.count;
    }
}

var status = candyMachine.status;
var getCandy = candyMachine.getCandy;

// es6
const candyMachine1 = {
    status : {
        name : "node",
        count : 5,
    },
    getCandy(){
        this.status.cout--;
        return this.status.count;
    }
}

// 비구조화 할당시 this가 의도와 다르게 동작하는 현상이 있을수도 있따
// getCandy 할당한후 getCaondy this 가 없기때문에 그 this를 찾지 못한다. 
    

const {status1 ,getCandy1} = candyMachine1;

const array = ["nodeJs", {}, 10,  true];
const [node, obj, , bool] = array;
const [node, obj, ...bool] = array;

const n = (x, ...y) => console.log(x,y);
n(5,6,7,8,9)            //VM1354:1 5 (4) [6, 7, 8, 9]

function o(){
    console.log(arguments);
}

o(1,2,3,4,5)        //VM1498:2 Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// es6에서는 arguamet 사용하지 않고 펼침 연산자를 사용한다
const p = (...rest) => console.log(rest)

p(5,6,7,8,9)        //VM1638:1 (5) [5, 6, 7, 8, 9]




