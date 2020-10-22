/**
   크롬 브라우저에 대해서 설명
   console.log();
   코드 센드박스.
   
    선언 : 특정 이름에 특정 값을 담는 것
    변수 : 이름이 붙은 값으로 값이 변경가능
    상수 : 값을 할당받지만 한 번 할당한 값은 변경 불가능 객체에 프로퍼티 추가가능
    var            변수            재정의 가능           함수형 스코프             es5         
    let            변수            재정의 불가능          블록 스코프              es6
    const          상수            재정의 불가능          블록 스코프              es6
    변수보다는 상수를 쓰는게 맞다.
    javascript 인터프리터 언어 es6를 es5로 트랜스 컴파일
    바벨에 대해서 
    에버그린 : 브라우저가 동작하려면 항상 인터넷에 연결이 되어 있어야하므로 항상 최신버전 유지가능 에버그린 브라우저들은 사용자가 업데이터 거부할수 없으므로
    항상 최신버전 사용 ex)chrome, FireFox
    하지만 에버그린 브라우저도 es6의 모든기능을 지원하지 않기때문에 트렌스컴파일은 피할수없다.

    자바스크립트 식별자 카멜 케이스 currentDate 스네이크 케이스 current_date 일관성

    자바스크립트의 숫자는 부동소수정 숫자 형식을 사용한다 
    자바스크립트 문자열은 유니코드 텍스트 자바스크립틔 문자열 리터럴에는 작은따움표, 큰따움표, 백틱을 이용하는데 백틱은 es6도입 ${}
    숫자 + 문자열은 숫자이다 3+'30' = 330
    불리언은 true false 밖에없는 데이터 타입 참 과 거짓 
    심볼 유일한 토큰을 나타내기 위해 es6도입한 새 데이터 타입 심볼은 항상 유일 다른 어떤 심볼과 일치하지 않는다
    const check = Symbol('check');
    const check1 = Symbol('check');
  
    check === check1

   null undefied  둘다 없다라는걸 의미한다.
    null :  진짜 없다 사용자 정의               프로그래머에게 허용된 데이터 타입
    undefiend : 정의되지 않았다. 사용자 정의 x          자바스크립트 자체에서 사용

    객체 객체의 본질은 컨테이너 컨테이너의 내용이 지나면서 바뀔수는 있지만 내용물이 바뀐다고 컨테니이너가 바뀌는것은 아니다.
    객체와 배열의 차이는 객체는 순서가 없고 배열은 순서가 있다. 객체는 오직 키와 벨류
    const obj = {};
    객체의 콘텐츠를 프로퍼티 또는 맴버라고 부른다.
    obj.color = "yellow" 
    obj["red"] = "red"
    객체 프로퍼티 삭제할때는 
    delete obj.color

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

    정규표현식
    문자열에서 필요한 복잡한 검색과 교체작업을 단순하게 만든다
    var result = "abcde5q".match(/\d/)[0];

    console.log(result); //결과 값: 5

    맥과 셋
    es6에서 새로운문법  새로운 데이터타입 Map Set , 그들의 약한짝인 WeakMap과 WeakSet을 도입

    연산자
    산술연산자 , 대입연산자        =  대입 연산자
    논리 연산자                  
    // NOT !              !test           validation 체크 
    // AND &&     
    // OR ||              let a = test || "1";
    비교연산자
    1 == true   
    타입을 비교하지 않는다.
    const a = 0;
    if(a+1 === 2){
        console.log("a+1이 입니다. ");
    }
    const device = 'samsung'
    switch(device){
        case 'samsung' : 
            console.log("삼성");
            break;
        case : 'iphone'
            console.log("아이폰");
            break;
        default : 
            console.log("없습니다.");
   
      break 루프 중간을 빠젼가간다
    continue 루프에서 다음단계로 건너뛴다.
          
    반복문
    for
    시작 -> 조건 -> 구문실행        특정조건이
    
    while
    let i =0; 
    let isFun = false;

    while(isFun === false){
        console.log(i);
        i++;
        if(i === 30){
            isFun = true;
        }
    }

    for of / for in
    const numbers = [10,20,30,40,50];
    for(let number of numbers){     for of es6문법
        console.log(number);
    }

    for in 객체 정보 반복문
    const doggy = {
        name : '멍멍이' ,
        sound : '멍멍' , 
        age : 2
    }

    console.log(Object.entries(doggy));         // 키와 밸류형태로 배열로만듬
    console.log(Object.keys(doggy));            // 키만 추출
    console.log(Object.values(doggy));          // value 만 추출
    for(let key in doggy){
        console.log(key +" : "+doggy[key])
    }
  
    continue;  구간 스킵  break;    반복문 멈추게 만듬

    while(fund > 1  )
        fund ++;
    for(let temp, i=0 , j=1; j<30; temp = i, i=j , j = i+temp)
        console.log(j);
    for(;;;)    
    들여쓰기는 명확하게 구분되도록해야된다
    프로젝트 스타일 가이드에 따라서 개발할것 개인적인 의견은 접어두고
    var i =0;
    do{
        console.log(i)
    }while(i < -1);
    
    함수
    function add(a,b){
        return a+b;
    }
    const sum = add(1,2);
    var test = 1;
    console.log(`qwe ${test}`);
   
    화살표 함수
    const add = (a,b) => {
        return a+b;
    }
    const add = (a,b) => return a+b;
    function this 와  화살표 함수의 this가 다르다.
    
    객체
    const school = {
        name : "학교" , 
        check : true 
    }
    console.log("asd");
    var test = 1;
    console.log(`qwe ${test}`);
    
    // 비구조화 할당
    const captinAmerica = {
        name: "스티븐 로저스",
        actor: "크리스 에반스",
        alias: "캡틴 아메리카"
    };
    function print(hero) {
        const {alias, name, actor} = hero;
        const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
        console.log(text);
    }
    print(captinAmerica);

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

    배열
    const array = [];
    새로운 항목은 push

   
    배열 내장함수
    forEach
    const hero = [1,2,3,4,5];
    hero.forEach(data => {
        console.log(data);
    })

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
    기존의 배열을 건드린다. 
    const numbers = [10,20,30,40];
    const index = numbers.indexOf(30);
    const  spliced = numbers.splice(index, 1); 
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
    */


