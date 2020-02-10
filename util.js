/*
    node api 안에 utilies 모듈이 있다.
    primise 중요
*/

const util = require("util");
const crypto = require("crypto");

// deprecated는 지원이 조만간 중단될 메서드 임을 알려줄 때 사용합니다.

const dontuseme = util.deprecate((x,y) => {         // 서비스가 중단되기전에 모든 서비스는 dceprecate를 사용한다.
    // 최단 거리 계산은 

    console.log(x+y);
}, "이 함수는 2019년 2월 부로 지원하지 않습니다. ");

dontuseme(1,2);

/*
    promise 를 지원하지 않는 (err, data) => {} 꼴의 
    콜백은 util.promsisify로 프라미스로 만들 수 있다.
    node 는 promise를 권장 한다 
*/
const randomBytesPromise = util.promisify(crypto, randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

// randomBytes 는 PRomise를 지원 하지 않는데 util.promisify를 이용해서 promise를 사용
crypto.randomBytes(64 , (err , buf) => {        // randombyte 가 버퍼에 담겨있다 . 
    const salt = buf.toString("base64");        // 랜덤한 바이트를 base64 문자열로 만들어 준다. 
    // 랜덤 바이트 이기때문에 salt 값이 달라진다. 
    console.log("salt" , salt);
    console.time("암호화");
    crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512" , (err, key) => {      // 100000 이라는 숫자보다 139405 이런 랜덤한 숫자로 높을수록 좋다.
                                                                              // 너무 높아도 비밀번호 만드느 시간이 오래걸린다
                                                                              // salt는 암호화된 비밀번호와 같이 저장하시고 iteration은 1초 정도 될떄까지 올리시는게 좋다

        // 해시 충돌 공격을 어렵게 하가 위해 salt(소금)이라는 문자열을 원래 비밀번호에 추가하고 iteration 횟수를 높입니다. 
        console.log("password", key.toString("base64"));
        console.timeEnd("암호화");  
    });
});

randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString("base64"); 
        return pbkdf2Promise("이건완",  salt , 651341, 64, "sha512")
    })
    .then((key) => {

    })
    .catch((err) => {
        console.error(err);
    })

 async (() => {
    const buf = await randomBytesPromise(64); 
    const salt = buf.toString("base64");
    const key = pbkdf2Promise("이건완" , salt, 651395, 64, "sha512");
    console.log("password", key.toString("base64"));
});