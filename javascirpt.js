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
    
    일반적으로 자바스크립트 코드를 작설할때 함수 선언문 방식으로 선언된 함수 끝에 세미클론을 붙이지 않지만 함수 표현식 방식의 경우 세미클론을 붙이는 것을 권장
    자바스크립트 인터프리트가 자동으로 세미클론 삽입

    var func = function(){
        return 42;
    }
    (function(){
        console.log("function called")
    })();
   
    애러 나는 이유는 자바스크립트 파서가 func()의 함수 정의에서 세미클론을 사용하지 않아. return 42 문장을 지나 func()의 함수 정의 끝에 있는 중괄호 {} 만으로 func()함수가 끝났다고 판단하지 않기때문이다
    많은 자바 스크립트 가이드에서 함수 표현식 방식에서 세미클론 사용을 권고
    
    자바스크립트의 함수도 Function()이라는 기본 내장 생성 함수로부터 생성된 객체

    함수는 하나의 단위로 실행되는 문의 집합이다
    자바스크립트는 강력함과 표현함의 근간이다 일급함수 
    함수 선언식
    function add(a,b){      // add 함수명 a,b 매개변수
        return a+b;             // 반환값 
                                // return 을 명시적으로 반환하지 않으면 자바스크립트는 undefined 를 반환한다.
    }
    const sum = add(1,2);               // 함수를 변수에 할당할수있다.
    
    함수 표현식은 식별자에 할당할 수도 있고 즉시 호출할수도 있다.  
    
    표현식 추천 이유는 호이스팅

    add(2,3)
    function add(x,y){
        return x+y;
    }

    add(2,3)
    var add = function(x,y){
        return x+y;
    }

    함수 호이스팅이 발생하는 원인은 자바스크립틔 변수 생성 초기화 작업이 분리되어있기 때문이다.

    자바스크립트 함수도 객체이다. 함수에 프로퍼티 추가 가능.

    var add = function(a,b){
        return a+b;
    }
    이름이 없는 함수 형태를 자바스크립트에서는 익명함수라고 부른다
    익명함수를 만들고 add 변수에 할당
    
    sum.f = {}      // 함수에 객체 프로퍼티나
    
    const o = {}
    o.sum = sum ;       // 함수를 객체 프로퍼티에 할당 가능하다.
    const arr = [1,2,3];
    arr[1] = sum;       // 배열 요소에도 할당할수있따.

    es6에서 함수의 기본파라메터를 지정할수있다.
    매개변수 해체및 확장연산자(...)를 써서매겨 변수 처리 가능

    매개변수 해체    
    // 비구조화 할당
    const captinAmerica = {
        name: "스티븐 로저스",
        actor: "크리스 에반스",
        alias: "캡틴 아메리카"
    };
    function print(hero) {
        const {alias, name, actor} = hero;      // 반드시 변수이름과 프로퍼티 이름이 일치해야된다
        const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
        console.log(text);
    }
    print(captinAmerica);

    확장 연산자
    function addPrefix(prefix, ...words){
        return words;
    }

    addPrefix(1,2,3,4,5)
    (4) [2, 3, 4, 5]
    
    this 키워드
    const o = {
        name : "홍길동",
        speak(){ return `My name is ${this.name} 입니다.`}
    }
    o.speak()       // My name is 홍길동 입니다.
    o.speak()를 호출하면 this가 o에 묶읍니다.
    this가 o에 묶인 이유는 프로퍼티여서가 아니라 o에서 speak를 호출했기때문이다.
    this를 결정하는 것은 스트릭트 모드인지에 따라 다르고 함수를 어디서 호출했느냐에 따라도 다르다
    메서드
    
    const o = {
    name : "알렌", 
        eat(){ console.log(`${this.name} 밥을 먹는다.`)}
    }
    undefined
    o.eat()
    VM446:3 알렌 밥을 먹는다.
    undefined
    const k= {
        name : "알렌", 
        eat : () => { console.log(`${this.name} 밥을 먹는다.`)}
    }
    undefined
    k.eat()

    화살표 함수
    화살표 함수와 function 키워드의 차이는 this가 달라진다.
    const add = (a,b) => {
        return a+b;
    }
    
    const add = (a,b) => return a+b;
    function this 와  화살표 함수의 this가 다르다.

    function 을 생략해도 됩니다.
    함수에 매개변수가 단 하나 뿐이라면 괄호(())도 생략할수 있습니다.
    함수 바디가 표현식 하나라면 중괄호 return 문도 생략할 수 있습니다.
    const f1 = function(){return "hello"};
    const f1 = () => "hello";

    const f2 = function(name){return `hello ${name}!`}
    const f2 = name => `Hello ${name}`

    const f3 = function(a,b){return a+b}
    const f3 = (a,b) => a+b;

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

    update.apply(bruce, [1995.'actor'])
    
    apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
    call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수로 배열을 받는다
    apply는 배열의 최솟값과 최대 값을 구할때 사용한다.
    const array = [2,3, -5, 15 ,7];
    Math.min.apply(null, array);                // this의 값에 null을 쓴 이유는 Math.min 과 Math.max가 this와 관계없이 동작하기 때문이다.
    Math.max.apply(null, array);
    Math.min(...array);

    bind 
    함수의 this 값을 영구적으로 바꿀수 있다.
    const updateBruce = update.bind(bruce);

    updateBruce(1904,"test")            // 해당 값에 맞게 bruce가 변경되는것을 확인할수있다.

    bind는 함수의 동작을 영구적으로 바꾸므로 찾기 어려운 버그의 원인이 될수있다.
    bind는 매우 유용하지만 함수의 this가 어디에 묵이는지 파악하고 사용

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
    caller 프로퍼티 : wktlsdmf ghcnfgks gkatn
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
    jdk안에 jre들어있다
    jdk 에서 javac
    컴파일타임
    런타임
    */

