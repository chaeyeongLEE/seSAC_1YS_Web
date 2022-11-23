/* 
new Promise(function(resolve, reject){
}); 
*/
function func1(){
    return new Promise(function(resolve,reject){
        resolve("성공");
    });
}

var a = func1();
console.log(a);

func1().then(function(result){
    console.log("result: ", result);
})
//then이 promise를 벗겨지고 글자가 들어온다고 생각하면 됨.

function func2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve("성공");},1000);
    });
}

var b = func2();
console.log(b);

func2().then(function(result){
    console.log("result2: ", result);
    return 'a';
}).then(function(abc){
    console.log("abc: ", abc) // 체이닝
});

//pending상태에서는 then이 실행되지 않고 resolved된 fullfilled 상태가 되면 실행 됨. 
//비동기지만 동기처럼 실행시킬 수 있다.

func1(function (name){
    console.log("func2");
    console.log("name: ", name);
})
func1().then(function(name){
    console.log("func2");
    console.log("name: ", name);
})