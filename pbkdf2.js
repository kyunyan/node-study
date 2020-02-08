
const crypto = require("crypto");

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

// 실무에서는 pbkdf2 보다 bcrypt, scrypt 를 더많이 사용한다.
console.log(crypto.createHash("sha512").update("비밀번호").digest("base64"));
// 이방식보다 위에방식이 훨씬 어렵고 해커들이 알아내기 어렵다 