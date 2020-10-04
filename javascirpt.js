/**
   크롬 브라우저에 대해서 설명
   console.log();
   코드 센드박스.
   
    선언 : 특정 이름에 특정 값을 담는 것
    변수 : 바뀐다
    상수 : 안 바뀐다
    var            변수            재정의 가능           함수형 스코프             es5         
    let            변수            재정의 불가능          블록 스코프              es6
    const          상수            재정의 불가능          블록 스코프              es6
    바벨에 대해서 
    null undefied  둘다 없다라는걸 의미한다.
    null :  진짜 없다 undefiend : 정의되지 않았다.
   
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
    for(let number of numbers){
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


