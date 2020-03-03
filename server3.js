
const http = require('http');
// CREDIT: 유인동님이 알려주신 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

// 클라이언트에서 서버로 데이터를 보내는 가장 쉬운 방법이 쿠키
const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.url, cookies);
  // 요청이나 응답에는 그에 대한 정보를 담고 있는 헤더가 포함되어 있습니다.
  console.log(req.headers.cookie);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });        // 200 은 성공한 요청 키가 mycookie 값은 test
  res.end('Hello Cookie');
}).listen(8081);
  
server.on("listening", () => {
    console.log('8081번 포트에서 서버 대기중입니다!');
});

server.on("error", (error) => {
    console.log(error);
});