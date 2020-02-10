
const crypto = require("crypto");

// 더 많은 암호화 알고리즘이 있다 구글에 node.js Crypto검색 공식문서에 가능한 종류가 나와있다
const cipher = crypto.createCipher("aes-256-cbc", "열쇠");         // 복호화가능하게 하는 알고리즘중에 aes-256-cbc 이런게있다 열쇠를 알아야 암호화했다가 복호화 가능

let result = cipher.update("이건완", "utf8", "base64");
//result += cipher.final("base64");               // 암호화를 마무리
console.log("암호 : ", result);

// createCipher utf8 평문을 base64 암호문으로
// createDecipher base64 암호문을 utf8 평문으로 
const decipher = crypto.createDecipher("aes-256-cbc", "열쇠");
let result2 = decipher.update(result, "base64", "utf8");
//result2 += decipher.final("utf8");

console.log("평문", result2);