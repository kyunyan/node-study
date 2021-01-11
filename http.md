ip

인터넷 프로토콜의 역활

지정한 ip주소에 데이터 전달

패킷이라는 통신 단위로 데이터 전달
ip 패킷정보
출발지 ip , 목적지 ip, 메시지 아이피 패킷을 던지면
아이피 프로토콜을 통해서 정히진 규약에 따라 노드를 통해서 던지다보면 목적지 주소까지 도달하게된다.

서버가 메세지를 받앗으면 반대로 출발지에서 목적지까지 아이피를 찾아서 반대로 200이라는 것을 던져주게된다.

아이피 프로토콜은 한계가 있다
비연결성
패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송 (컴퓨터가 꺼졋어도 던지게된다 패킷을 던질 대상의 컴퓨터가 꺼졋어도)
비신뢰성

- 중간에 패킷이 사라지면
- 패킷이 순서대로 안오면

프로그램 구분
같은 아이피를 사용하면 서버에서 통신하는 어플리케이션이 둘이 상이면

비연결성 상태일 때
클라이언트가 대상서버가 패킷을 받을수 있는 상태인지 모름

패킷이 소실이 됫을때
패킷이 전달되는 순서 문제 발생
패킷이 보통 1500byte 이상이 되면 끊어서 보낸다 .
근데 순서대로 도착을 안할때

이런문제를 tcp 에서 해결해준다

인터넷 프로토콜 스택의 계층
어플리케이션 계층 - http , FTP
전송 계층 - tcp, udp
인터넷 계층 - ip
네트워크 인터페이스 계층

프로토콜 계층
어플리케이션        웹프라우저 , 채팅프로그롬

os      tcp ,udp , ip

네트워크 인터페이스 Lan드라이버 ,Lan 카드

패킷이라는 단어는 수하물을 뜻하는 패키지 덩어리를 말하는 버킷이라는 단어의 함성어

tcp / ip 패킷정보
ip : 출발지 ip , 목적지 ip ,기타
tcp : 출발지 포트 ,  목적지 포트 , 전송제어, 순서 , 검증 제어

tcp 특징 전송 제어 프로토콜

- 연결 지향 tcp 3 way handshake        연결을 하고 메세지를 보내는 특징이있다. / 데이터를 전달한 것을 보장한다. / 순서를 보장해준다.

클라이언트                            ->                                        server
1.syn 클라이언트에서 서버로 syn 이라는 메세지를 보낸다
2.syn+ack      왓네 라는 ack라는 메세지를 답장해주며 나도 sync 라는 메세지를 보내며 연결해달라고 한다.
3.ack           ack 라는 메세지를 응답한다.
요즘은 최적화가 되서 ack할때 같이 메세지 전송도한다
클라이언트도 서버를 믿을수 있고 서버도 클라이언트를 신뢰할수있다.
syn : 접속요청
ack : 요청수락

4. 연결이 되고나면 데이터가 전송이 일어난다.

논리적으로 연결이 됫다고 생각하면 된다.

- 데이터 전달 보증
  데이터를 잘받앗어 라는 메세지를 전송해준다.
- 순서보장
  1,2,3 순서로 보냈다는데                ->                  도착을 1 , 3 , 2 순서로 도착하면
  <- 2번부터 다시보내라고 던진다

udp 특징
사용자 데이터그램 프로토콜

- 하얀 도화지에 비유 (기능이 거의 없다)
- 연결지향 - tcp3 way handsahke x
- 데이터 전달 보증 x
- 순서 보장 x
- 데이터 전달 및 순서가 보장되지 않지만, 단순하고 빠름
- 정리
  - ip와 거의 같다 + port + 체크섬 정도만 추가
  - 어플리케이션에서 추가 작업 필요

포토는 어플리케이션은 각각의 어플리케이션에따라 구분해줌
체크섬 이메세지에 대해서 제대로 검증해주는 부분만 있음

장점이 있음 -> 전송속도를 빠르게 만들기 어렵다
udp 는 내가 원하는게 있으면 어플리케이션 레벨로 만들면 된다
요즘 각광을 받고있다
영상을 보낼때도 tcp프로토콜을 받고있따.

포트
한번에 둘이상 연결해야된다면
tcp 에 출발지 포트 목적지 포트 가 있다.
ip는 아파트로 비교한다면 포트는 몇동 몇호

0~65535 할당 가능
0~ 1023 : 잘알려진 포트, 사용하지 않는 것이 좋음
ftp - 20,21
telnet - 23
http - 80
https - 443

dns
ip는 기억하기 어렵다
ip는 변경 될 수 있다.

도메인 네임 시스템

- 전화번호부 같은 서버를 제공
- 도메인명을 ip 주소로 변환

도메인명                ip
구글                    200.200.200.2

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
