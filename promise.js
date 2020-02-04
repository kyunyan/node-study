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

const condition = true;     // true면 resolve, false면 reject
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

// then에 리턴 값이 있으면 다음 then으로 넘어갑니다.
// Promise를 리턴하면 reslolve나 reject 되어 넘어갑니다.
// rejct 였으면 catch가 잡는다. 

// 처음 promise 가 성공했을때 message2에 성공을 넘겨주고 그다음 성공했을 때 message3에 성공을 넘겨준다. 
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message); 
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            reject(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    });

 // 이런식으로 사용해서 가독성이 좋아진다.
 const handleMessage = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message); 
    });
}

const handleMessage2 = (message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        reject(message2);
    });
}

promise
    .then(handleMessage)
    .then(handleMessage2)
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise API
/*
    Promise.resolve(성공 메세지)
    Promise.reject(실패 메세지)
*/

const promise = new Promise((res , rej) => {
    res("성공");
});
​
const successPromise = Promise.resolve("성공")
    .then();
const failurePromise = Promise.reject("실패")
    .catch();

// Promise.all로 여러 프로미스를 동시에 실행 가능 하다. 단, 하나라도 실패하면 catch로

Promise.all([Users.findOne(), Users.remove(), Users.update()])
    .then((results) => {})
    .catch((error) => {})

// Promsie 는 결과값을 가지고 있자만 .then이나 .catch를 붙이기 전까지 반환하지 않는것     

// async wait 
/*

async func() => {
    try{
        const user = await Users.findOne("zero");
        const updatedUser = await Users.update("zero", "nero");
        const removeUser = await Users.remove("nero");
        console.log("다 찾았니");
    }catch(err){
        console.log(err);
    }    
}
func()
*/

// async await도 Promise 기반이므로 Promise를 먼저 알아야 합니다.
// 동기식으로 보이기 때문에 코드 순서와 실행 순서가 같아요.
// await 예외 처리를 위해 try catch 로 감쌉니다.
// await 에서난 에러 처리를 위해 한번에 사용할때는 각 서브미션별로 try catch를 감싸서 사용할시 어디서 에러가 난것인지 처리 가능






