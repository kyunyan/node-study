const fs  = require("fs");

/*
    fs.access("파일 경로", 권한)
    권한은 F_OK (존재 여부) , R_OK(읽기 여부) , W_OK(쓰기 여부)
*/

// 모든 메서드들 뒤에 Sync를 붙이면 동기식으로 동작
fs.access("./folder", fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK , (err) => {
    if(err){
        if(err.code === "ENOENT" ){
            console.log("폴더 없음");
            fs.mkdir("./folder", (err) => {         // 데렉토리 만드는 메서드
                if(err){
                    throw err;
                }
                console.log("폴더 만들기 성공");
                // w 나 r,a 같은 것은 https://nodejs.org/api/fs.html#fs_file_system_flags a : 기존 파일 추가
                fs.open("./folder/file.js" , "w" , (err , fd) => {
                    if(err){
                        throw err;
                    } 
                    console.log("빈 파일 만들기 성공", fd);
                    fs.rename("./folder/file.js", "./folder/newfile.js" , (err) => {
                        if(err){
                            throw err;
                        }
                        console.log("이름 바꾸기 성공");
                    });
                });
            });
        }else{
            throw err;
        } 
    }else{
        console.log("이미 폴더 있음");
    }
});