
 const {url} = require("url");

 const myURL = new URL("http://www.gilbut.co.kr/book/view?bookcode=https://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript.js/");
 console.log("searchParams", myURL.searchParams);

 // 노드 searchPArams의 메서드는 FormData나 URLSearchParams 객체에도 비슷하게 쓰임
 
 // front 에서도  url 객체와 searchParam객체가 있는데 그럴때 많이 사용한다.
// 도메인 부분은 같은 도메인일때 생략할수 있는데 그럴때는 whatw방식은 안되서 url.parse방식을 사용한다
// 나머지는 이렇게 사용한다.
 console.log("searchParams.getAll() ", myURL.searchParams.getAll("category"));          // 카테고리에 node 및 자바스크립트가 나온다
 console.log("searchParams.get()", myURL.searchParams.get("limit"));                    // 이거 하나만 가자여노다 10
 console.log("searchParams.has()" , myURL.searchParams.has("page"));                    // page 값을 있으면 true

 console.log("searchParams.keys()", myURL.searchParams.keys());                         // 위에서 page , limit category
 console.log("searchParams.values()", myURL.searchParams.values());                     // 그 키의 값들 이 나온다

 myURL.searchParams.append("filter", "es3");                   // &filter = es3
 myURL.searchParams.append("filter", "es5");                   // &filter = es3 & filter= es5 
 console.log(myURL.searchParams.getAll("filter"));

// append는 값 추가 (기존 값 보존)
// set은 기존 값 초기화 후 수정

 myURL.searchParams.set("filter", "es6");                       // filter = es6                  
 console.log(myURL.searchParams.getAll("filter"));

 myURL.searchParams.delete("filter");                           // 기존에 있는 값을 다지온다
 console.log(myURL.searchParams.getAll("filter"));

 console.log("searchParams.toString() : " , myURL.searchParams.toString()); 
 myURL.search = myURL.searchParams.toString();