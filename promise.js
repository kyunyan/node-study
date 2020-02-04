// 자바스크립트는 논블록킹 비동기로 작동한다. 
/*

Users.findOne("zero", (err, user) => {
    if(err){
        return console.error(err);
    }
    console.log(user);
    User.update("zero", "nero", (err, updateUser) => {
        console.log(updateUser);
    }) 
});
console.log("다 찾았니? ");

//  이런식으로 계속해서 싸이는 것을 콜백 지옥이라고 해서 생각한것이 변술 뺏다 

const afterRemove = (err, removeUser) => {
    console.log(removedUser);
}

const afterUpdate = (err, updateUser) => {
    console.log(updateUser);
    User.remove("nero", afterRemove);
}


Users.findOne("zero", (err, user) => {
    if(err){
        return console.error(err);
    }
    console.log(user);
    User.update("zero", "nero", afterUpdate); 
});
console.log("다 찾았니? "); 

Promise 가 나온이후로 javascript node 의 비동기가 완전히 달라졋다. 
   
Users.findOne("zero").then((user)=> {
    console.log(user);
    return Users.update("zero", "nero");
})
.then((updatedUser) => {
    console.log(updatedUser);
    return Users.remove("nero");
})
.then((removeUser) => {
    console.log(removeUser);
})
.catch((err) => {
    console.error(error);
});

console.log("다 찾았니? ");

// javascript 함수에서 첫번째가 대문자 인 것은 생성자로 의미한다 즉 new 를 붙일수 있다는 의미이다. Promise

reseolve 성공 메시지
reject 실패 메시지 
*/

const plus = new Promise((resolve , reject) => {
    const a = 1;
    const b = 2;
    if(a+b > 2){
        resolve(a+b);               // resolve(msg) -> then((msg))
    }else{
        reject(a+b);                // reject(err) -> catch((err)
    }
});

 plus
    .then((success) => {
        console.log(success);            // 성공하면 리졸브가 들어온다
    })
    .catch((fail) => {    
        console.log(fail);              // 실패하면 리젝트가 들어온다
    })
// 3   Promise {<resolved>: undefined} 성공했으르므로 resolved 가 들어온다. 

// Promise를 지원하는 메서드는 내부적으로 지원해주기 때문에 사용 가능합니다. 
/*
    const Users = {
        findOne(){
            return new Promise((res, rej) => {
                if("사용자를 찾으면"){
                    res("사용자");
                }else{
                    rej("못 찾았어요");
                }
            })
        },
        remove(){    return new Promise()} 
    }
    // Promise를 사용하기 때문에 then 과 catch 를 사용할수 있다. 
    Users.findOne()
        .then()
        .catch()
*/

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve("성공");
    }else{
        reject("실패");
    }
});

promise
    .then((message) => {
        console.log(message);    // 성공 (resoleve)한 경우 실행
    })
    .catch((error) => {
        console.log(error);     // 실패 (reject)한 경우 실행
    });
//성공
//Promise {<resolved>: undefined}
