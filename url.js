/**
 노드에서 많이 접하는게 주소!! 
 // 주소는 여러가지 구성요소로 구성되어있다 . 
                href
protocol    auth       host            Path                    hash                 // 위쪽은 기존방식의주소체계
                       hostname port   pathname    search   
                                                   query
https://    user : pass @.com   :8080   path       ? query     #hash

protocol   username pass   host        pathname     search      hash                // 아래는 whatwg방식의 주소체계
origin                     origin      
href  

 */

 const url = require("url");

 const URL = url.URL;   
 const myURL = new URL("http://www.gilbut.co.kr/book/view?bookcode=BN002045/");

 console.log("new URL()", myURL);
 console.log("url.format()", url.format(myURL));    // 합처서 하나로 만들어준다!!
 console.log("-----------------------------------");
/**
    new URL() URL {
        href: 'http://www.naver.com/',
        origin: 'http://www.naver.com',
        protocol: 'http:',
        username: '',
        password: '',
        host: 'www.naver.com',
        hostname: 'www.naver.com',
        port: '',
        pathname: '/',
        search: '',
        searchParams: URLSearchParams {},
        hash: ''
    }
    url.format() http://www.naver.com/
 */

