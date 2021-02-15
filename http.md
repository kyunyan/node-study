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
