/**
   크롬 브라우저에 대해서 설명
   console.log();
   코드 센드박스.
   
    자바스크립트 식별자 카멜 케이스 currentDate 스네이크 케이스 current_date 일관성

    const s = "hello";
    s.toUpperCase() 
    함수를 사용할수있는 이유는 자바스크립트가 일시적으로 String객체를 만든다 이 임시객체안에 toUpperCase 함수가 들어있다
    자바스크립트 함수를 호출하는 즉시 임시객체를 파괴한다.
    확인법
    s.test = 3;
    s.test // undefined

    배열은 
    순서가 있고 순차적인 숫자이다.

    날짜 객체 date 객체는 컴퓨터 날짜를 따른다.
    const date = new Date();
    date.getFullYear();
    date.getMonth()
    date.getDay();
    date.getHours();
    date.getMinutes()
    date.getSeconds();
    date.getMilliseconds();

    함수

    call apply, bind
    call 메서드는 모든 함수에서 사용할 수 있으며 this를 특정 값으로 지정할수 있다.
    함수를 호출하면서 call을 사용하고 this를 사용할 객체를 넘기면 해당 함수의 주어진 객체의 메서드 인것처럼 사용

    const bruce = {name : "bruce"};

    function greet(){
        return `Hello, I'm ${this.name}`;
    }
   
    greet()
    greet.call(bruce)

    function update(birthday, occupation){
        this.birthday = birthday;
        this.occupation = occupation;
    }
    
    const bruce = {name : "bruce"};
    
    update.call(bruce, 1949, "singer")
    
    bruce
    {name: "bruce", birthday: 1949, occupation: "singer"}
    
    apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
    call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수로 배열을 받는다
    apply는 배열의 최솟값과 최대 값을 구할때 사용한다.
    const array = [2,3, -5, 15 ,7];
    Math.min.apply(null, array);
    Math.max.apply(null, array);
    Math.min(...array);

    bind 
    함수의 this 값을 영구적으로 바꿀수 있다.
    const updateBruce = update.bind(bruece);

    자바스키립트트 함수를 일급객체  -> 일급객체의 특성으로 함수형 프로그래밍이 가능하다.
    리터럴에 의해 생성
    변수나 배열의 요소에 객체의 프로퍼티 등 할당가능
    var boo = function(){}      
    var obj = {}
    obj.baz = function()
    
    함수의 인자로 전달가능
    var foo = function(func){
        func();
    }
    foo(function(){})
    함수의 리턴값으로 리턴가능
    var foo = function(){
        return function(){

        }
    }
    동적으로 프로퍼티를 생성 및 할당 가능

    function add(x,y){}
    
    name 프로퍼티 : 함수의 이름
    caller 프로퍼티 : 자신을 호출한 함수
    arguments 프로퍼티 함수를 호출할때 전달된 인자값을 나타내낸다

    arguments 객체는 함수를 호출할때 호출된 함수의 내부로 인자값과 함께 전달 arguemtns 프로퍼티와 유사하게 함수를 호출할때 전달 인장의 정보 제공

    모든 함수의 부모 객체는 Function prototype 모든 함수들의 부모역활을 하는 프로토타입객체

    함수가 생성될때 일어나는 일은 내가 정리한것 참조


    스코프
    function f(x){      x의 스코프가 함수 f라고 말한다.
        return x+3;
    }
    가시성이라고 불리는 스코프는 프로그램의 현재 실행 중인 부분, 즉 실행 컨텍스트에서 현재 보이고 접근할수 있는 식별자 들을 말한다.
    존재한다는 말은 그 식별자가 메모리에 할당된 무언가를 가르키고 있다는 뜻이다. 존재하지만 스코프 안에 없는 변수
    무언가가 더는 존재하지 않는다고 해서 자바스크립트는 메모리를 바로 회수하지 않는다 카비지 콜렉션 프로세스에 의해 메모리를 회수한다.

    자바스크립트의 스코프는 정적이다.
    정적 스코프는 어떤 변수가 함수 스코프 안에 있는지 함수를 정의할때 알수 있다는 뜻입니다.
    
    전역스코프 함수스코프 블록스코프

    전역스코프에선언된변수를 전역변수  전역스코프 남용은 나쁘다
    전역스코프보다는 유저정보같은 경우 단일 객체에 보관
    usnrname = "qwd"

    user= {name : "qwe"}

    객체
    const school = {
        name : "학교" , 
        check : true 
    }
    console.log("asd");
    var test = 1;
    console.log(`qwe ${test}`);

    setter getter
    const numbers = {
        a: 1, 
        b: 2
        get sum(){
            console.log("sum 함수가 실행됩니다");
            return this.a + this.b;
        } 
    }

    const dog = {
        _name : '멍멍이' ,
        get name(){
            console.log("내")
        }
        set name(value){
            this._name = value;
        }
    }

    const numbers = {
        _a : 1, 
        _b: 2,
        sum : 3,
        calculate(){
            this.sum = this._a + this._b;
        }

        get a(){
            return this._a;
        }

        get b(){
            return this._b;
        }

        set a(value){
            this._a = value;
            this.calculate();
        }

        set b(value){
            this._b = value;
            this.calculate();
        }
    }

    프로토타입
    모든 객체는 자신의 부모역활을 하는 객체와 연결되어 있다.
    객체 지향의 상속개념과 비슷하게 모든 부모객체의 프로퍼티를 자신의 것처럼 쓸수 있는 거같은 특징이있다
    이러한 부모타입의 객체를 프로토타입 객체라고한다.
    배열
    const array = [];
    새로운 항목은 push

   
    배열 내장함수
    forEach
    const hero = [1,2,3,4,5];
    hero.forEach(data => {
        console.log(data);
    })

    ... 

    map
    const array = [1, 2, 3, 4, 5, 6, 7, 8]

    const squared = array.map(n => n * n);

    const items = [
        {id : 1, test : 'hello'}, {id : 2 , text : 'bye'}
    ]
   
    const texts = items.map(item => item.text);         // 객체에 text 부분만 뽑아낸다
    console.log(texts);

    const superheres = ['아이언맨','캡틴 아메리카', '토르']           //indexOf
    const index = superheres.indexOf('토르');    //2        -1 은 일치하는것이 없다.
        
    // findIndex 몇번째 인지
    const todos = [ {id : 1, text : 'test' , done : true}, {id : 2, text : 'test2' , done : true} , {id : 3, text : 'test3' , done : true}]
    const index = todos.findIndex(todo => todo.id === 3)     // 비교하는건 함수  2
   
    // find 는 객체를 리턴한다
    const index = todos.find(todo => todo.id === 3)     // 비교하는건 함수  {}

    //filter 
    const tasksNotDone = todos.filter(todo => todo.done === false);
    console.log(tasksNotDone);

    // 특정항목 제거
    배열도 객체이므로 배열요소나 프로퍼티를 삭제하는 delete 연산잣 ㅏ용가능
    기존의 배열을 건드린다. 
    const numbers = [10,20,30,40];
    const index = numbers.indexOf(30);
    const  spliced = numbers.splice(index, 1);
    splice(배열 시작위치, 시작 위치로부터 삭제할 요수의수, 삭제할 위치에 추가할 요소) 
    console.log(spliced)            // 30
    console.log(numbers)            // 10, 20 ,40
    
    // 기존의 배열을 건드리지 않는다.
    const numbers = [10,20,30,40];
    
    const spliced = numers.slice(0,2);
    console.log(sliced);
    console.log(numbers);

    shift,pop,unshift, push
    const numbers = [10,20,30,40];
    
    기존의 배열 수정
    const value = numbers.shift();      0번째를 빼준다          shift 랑 unshift 란짝
    console.log(value);         // 10

    // 기존의 배열수정
    const value = numbers.pop();        끝애 거를 빼준다            push 랑 pop이랑 짝
     console.log(value);         // 40

    numbers.unshift(5);             앞에 추가
    console.log(numbers)        [5,10,20,30,40]

    const arr1 = [1,2, 3];
    const arr2 = [4,5,6];

    // 기존의 배열을 건들지 않는다.
    const concated = arr1.concat(arr2);        [1,2,3,4,5,6];
    const concated = [...arr1 , ...arr2]       [1,2,3,4,5,6]

    join        join은 세펄에이터
    const array= [1,2,3,4,5];
    array.join()            // 1,2,3,4,5
    array.join(' ')            // 1 2 3 4 5
    
    reduce  reduce 배열안에 있는 값을 연산해서 할때 사용
    const numbers = [1,2,3,4,5];
    
    let sum = numbers.reduce((accumulator, current) => accumulator+current , 0);

    const avg = numbers.reduce((accumulator, current, index, array) => {
        if(index === array.length -1){
            return (accumulator+current) / array.length
        }    
        return accumulator+current;
    } , 0);
    accumulator sum 값이 된다. index , array 도 받아올수있다.

    const alphabets = ['a', 'a', 'a', 'b', 'c', 'c']
    const counts = alphabets.reduce((acc, current) => {
        if(acc[current]){
            acc[currnet] += 1;
        }else{
            acc[current] = 1;
        }
        return acc;
    }, {})

    유사 배열객체
    일반 객체에 length 프로퍼티를 가진 객체를 유사 배열 객체 -> arguments
    var obj = {name : "foo", length : 1}
    Array.prototype.push.apply(obj, ["baz"]);
    console.log(obj)
    */

    /*
    그림을 직접 그려라
    jvm : 처음공부할때는 java를 실행주는 프로그램이 있구나
    tmp Livrary/java/javaVirtualMachines/jdk-14.0.1.kdk/Home/bin/java Hello

    자바의 버전의 다른 버전으로 컴파일 하더라도 자바가 실행된다.
    14 버전 컴파일 한것을 8로 실행시킬수 없다.
    8버전으로 컴파일인 한것을 14버전으로 실행시킬수있다.

    컴파일 할때 옵션을 줄수 있다.
    javac 옵션을 통해 상위버전 컴파일 한것을 컴파일해서 실행시킬수있다.
    스프링 부트 스프링 을 실행시킬수있는 이유는 버전 컴파일을 한것을 알수있다.

    unSopportedCalssVersionError 에러가 난다 call file version 58이 난다.
    java 9 버전부터 jre 없다
    
    */

