/* 
new Promise(function(resolve, reject){
    //resolve : 함수형태. 성공했을 때 실행할 친구
    // reject: 함수형태, 실패 or 에러를 처리할 때 사용되는 친구
})
*/
function func3(flag){
    return new Promise(function(resolve, reject){
        if (flag){
            resolve("flag는 true");
        } else {
            reject("flag는 false");
        }
    });
}
func3(false).then(
    function(msg){
        console.log("msg1: ", msg);
    },
    function(msg){
        console.log("msg2: ", msg); //then에서 처리되면 catch에선 처리 안됨.
    }
).catch(
    function(msg){
        console.log("msg3: ", msg); //then에서 처리 못하면 catch에서 처리.
    }
);
/* func3(false).then(
    function(msg){
        console.log("msg1: ", msg);
    },
    function(msg){
        console.log("msg2: ", msg);
    }
); */
//resolve가 실행되면 then에서 첫번째가 실행
//reject가 실행되면 then에서 두번째가 실행
