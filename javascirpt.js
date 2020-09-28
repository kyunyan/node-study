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
*/
