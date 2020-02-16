


const fs = require("fs");

fs.writeFile("./wrtieme.txt", "글을 써주세요111",(err) => {
    if(err){
        throw err;
    }
    fs.readFile("./wrtieme.txt", (err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});