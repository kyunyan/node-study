const path = require("path");

// process 객체에는 현재 실행중인 노드 프로그램 정보가 들어있다.

path.dirname(__filename);
path.extname(__filename);
path.basename(__filename);


console.log(path.normalize("c://usr\\\aaa\\path.js"));       // 경로 확인해줌
console.log(path.isAbsolute("c:/"));                        // 상대경로인지 절대경로인지 확인
console.log(path.relative("c://users://zerocho//path.js"), "c://"); // 어디에 경로가 있는지 알려준다 상대경로로 보여줌 
console.log(path.parse(__filename));    
// 반대가 path.format
/*
{
    root: '/',
    dir: '/Users/igeon-wan/Desktop/node',
    base: 'pathModule.js',
    ext: '.js',
    name: 'pathModule'
}
*/

//path.sep        // 경로 구분 
//'/'     
//path.delimiter      // 환경변수 구분자  원래 c/npm : c/ node : 
//':'

/*
    path.join - 절대 경로 무시하고 합침
    path.resolve - 절대 경로 고려하고 합침 루트는 C:/(윈도)
*/
