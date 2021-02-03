url 와 웹 브라우저 요청 흐름

- url
- 웹브라우저 요청 흐름

urI(Uniform Resource Identifier)

URL는 로케이터, 이름 또는 둘다 추가로 분류될수 있다.

URL(Resource Locator)               URN(Resource Name)

uri(Resource Identifier)

URL(Resource Lacator)

foo                   ://      example.com:8042           /over/there         ?        name=ferret         #         nose

scheme                         authority                             path                             query                         fragment

URN(Resource Name) -> 잘쓰지 않는다 거의 url 실제 이름 부여 이름을 부여하면 찾을수 가 없다.

urn                   :                    example:animal:ferret:nose

URI 단어 뜻

Uniform : 리소스 식별하는 통일된 방식

Resource :  자원, URI로 식별할 수 잇는 모든 것 (제한 없음) / 우리가 구분할수 있는 모든것

Identifier : 다른 항목과 구분하는데 필요한 정보 / 주민번호

URL - Locator : 리소스가 있는 위치를 지정

URN - Name : 리소스에 이름을 부여

위치는 변할 수 있지만, 이름은 변하지 않는다.

URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보현화 되지 않음...

URL 전체 문법

scheme://[userinfo@]host[:port][/path][?query][#fragment]

https://www.google.com/search?q=hello&hl=ko

프로토콜(https)

호스트명(www.geogle.com)

포트번호(443)

패스(/search)

쿼리파라미터(q=hello&hl=ko)

URL -  scheme

주로 프로토콜 사용

프로토콜: 어떤방식으로 자원에 접근할 것인가 하는 규칙 ex ) http, https, ftp

http는 80포트 https 는 443 포트를 주로 사용

https는 http에 보안 추가

URL  - userinfo

URL에 사용자정보를 포함해서 인증

거의 사용하지 않음

URL - port

포트(PORT)

접속포트

일반적으로 생략, 생략시 http 는 80 https 는 443

URL - path

리소스 경로(path), 계층적 구조

URL - query

key= value 형태

?로 시작 , &로 추가 가능

query parameter , query string 등으로 불림 , 웹서버에서 제공하는 파라미터

URL - fragment

html 내부 북마크 등에 사용

서버에 전송하는 정보는 아님

웹브라우저 요청 흐름

https://www.google.com:443/search?q=hello&hl=ko

DNS 조회 200.200.200.2 https port 생략 , 443

http 요청 메세지 생성

GET  /search?q=hello&hI=ko HTTP/1.1 http 버전정보

HOST : www.geogle.com

HTTP 메세지 전송

1. 어플리케이션에서 웹브라우저가 HTTP 메세지 전송
2. SOCKET 라이브러리를 통해 전달
3. A: TCP/IP 연결 (ip, port)
4. B: 데이터 전달
5.
