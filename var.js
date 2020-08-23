const odd = "홀수입니다";
let even = "짝수입니다.";

console.log(odd);
even = even + "zero";

// es javascript 표준
// 브라우저들이 이표준을 보고 구현
// es2015에서 es6문법이 나옴

// odd와 even을 다른 곳에 사용하고 싶다면 html에서 script 를 호출하여 합처서 사용

// 모듈이 될 파일은 module.exports = 값; 을 마지막에 붙여주세요.
// 내보내도 되는 것들을 한곳에 모아 module.exports 를 사용해서 내보낸다
// 나는 이제 모듈로 다른파일에서 사용할 준비가 되어있다.
// module 이라는 객체에 exports 속성이있다 
module.exports = {
 //   odd : odd , 
 //   even : even
 // 줄여서 이렇게 사용할수있다
 odd , 
 even
}

// 위에나 아래나 똑같다 
// exports.odd = odd;
// exprots.even = even;
// module.exports === exports 
// exports 는 객체 속성만 담을 수 있어요.
// 객체 속성으로 담어져 있는 것만 사용할수있다 . 대입연산자로 되어있는 것은 사용불가


/* 터미널에 node 를 친후
   module을 칠시 관련된 경로가 모두 나온다. 

    Welcome to Node.js v12.14.1.
    Type ".help" for more information.
    > module
    Module {
    id: '<repl>',
    path: '.',
    exports: {},
    parent: undefined,
    filename: null,
    loaded: false,
    children: [],
    paths: [
        '/Users/igeon-wan/Desktop/node/repl/node_modules',
        '/Users/igeon-wan/Desktop/node/node_modules',
        '/Users/igeon-wan/Desktop/node_modules',
        '/Users/igeon-wan/node_modules',
        '/Users/node_modules',
        '/node_modules',
        '/Users/igeon-wan/.node_modules',
        '/Users/igeon-wan/.node_libraries',
        '/usr/local/lib/node'
    ]
    }
*/