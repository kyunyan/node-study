/*
자바스크립트의 모든 객체는 자신의 부모역활을 하는 객체와 연결되어 있다.
객체지향의 상속 개념과 같이 부모 객체의 프로퍼티를 자신의 것처럼 쓸수 있다는 특징이 있다
이러한 부모객체를 프로토타입 객체라고한다.
var foo = {}
console.log(foo.toString())         // foo 객체의 부모인 프로토타입 객체에 to String()이 정의 되있다.

프로토 타입 클래스 객체 생성자
function Animal(type, name ,sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    }
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

// 객체 생성을할때는 함수의 이름을 대문자로 
const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

say라는 함수가 겹치기때문에 prototype을 사용한다.

객체 생성자 상속하기
function Animal(type, name ,sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

//call 이라는 함수를 통해서 this 이객체 생성자 함수에서의 this를 넣어준다.
function Dog(name , sound){
    Animal.call(this, "개", name , sound);
}

function Cat(name, sound){
    Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype; 

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

ES6 class

class Animal{
    // 객체 생성자 함수 비슷한것
    constructor(type, name sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.sound);
    }
}

// 함수를 만들게되면 자동으로 프로토탑에 등록이된다
console.log(Animal.prototype.say)

const dog = new Animal("개", "멍멍이" , "망망");
cosnt cat = new Animal("고양이", "야옹이", "야옹");

class Dog extends Animal{
    constructor(name , sound){
        super("개", name , sound);
    }
}


class Cat extends Animal{
    constructor(name , sound){
        super("고양이", name , sound);
    }
}

const dog = new Dog( "멍멍이" , "망망");
cosnt cat = new Cat( "야옹이", "야옹");

Food class 만들기

class Food {
    constructor(name){
        this.name = name;
        this.brands = [];
    }

    addBrand(brand){
        this.brands.push(brand);
    }

    print(){
        console.log(`${this.name}을 파는 음식점들 : `);
        console.log(this.brands.join(', '));
    }

    const pizza = new Food('피자');
    pizza.addBrand("피자헛");
    pizza.addBrand("도미노 피자");

    const chicken = new Food('치킨');
    chicken.addBrand('굽네 치킨');
    chicken.addBrand('BBQ');

    pizza.print();
    chicken.print();
}
*/