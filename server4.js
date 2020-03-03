const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {           
    const { query } = url.parse(req.url);               // url 이 파싱되서
    const { name } = qs.parse(query);                   // 쿼리 스트링으로 들어간다
    console.log("query : "+ query +"  name : "+name);
    const expires = new Date();                 
    expires.setMinutes(expires.getMinutes() + 5);           // 쿠키의 유효시간 현재시간으로부터 5분뒤
    res.writeHead(302, {            // 상태코드 302는 임시 이동으로, 브라우저에서 Location에 적힌 페이지로 이동하라는 뜻입니다.
      Location: '/',                // 302는 루트페이지로 이동해라 로그인 페이지에서 
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    fs.readFile('./server4.html', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기중입니다!');
  });