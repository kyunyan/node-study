const crypto = require("crypto");

crypto.createHash("sha512").update("비밀번호").digest("base64");
// sha512 라는 알고리즘을 통해서 알고리즘을 만들어내고 암호화 하고싶은 비밀번호를 update에 넣으면 암호화가된다 
// digest base64로 출력된다

