const url = require("url");
const querystring = require("querystring");

// querystring 은 url 과 같이 사용된다.
const parseURL = url.parse("http://www.gilbut.co.kr/book/view?bookcode=https://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript.js/");
const query = querystring.parse(parseURL.query);


// querystring 보다 searchParams 기능이 더많다
console.log("querystring.parse()", query);
console.log("querystring.stringfy() : " , querystring.stringify(query));