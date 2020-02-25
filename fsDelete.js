const fs  = require("fs");

// 콜벡 핼을 이결 하기 위해 promises; 가 생김 node 10에서 생겻는데 잘사용하진 않음 실험적임 아직은
/*
    const fs = require("fs").promise;

    fs.access().then().catch()
*/

/*
    fs.access("파일 경로", 권한)
    권한은 F_OK (존재 여부) , R_OK(읽기 여부) , W_OK(쓰기 여부)
*/

// 모든 메서드들 뒤에 Sync를 붙이면 동기식으로 동작
fs.readdir("./folder" , (err, dir) => {     // 파일을 읽는다
    if(err){
        throw err;
    }
    console.log("폴더 내용 확인" , dir);

    fs.unlink("./folder/newFile.js" , (err) => {        // 그파일을 지우는거
        if(err){
            throw err;
        }
        console.log("파일 삭제 성공");

        fs.rmdir("./folder", (err) => {     // 폴더를 지우는거
            if(err){
                throw err;
            }
            console.log("폴더 삭제 성공");
        })
    });
});