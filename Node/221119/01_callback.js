function func1(callback){
    console.log("func1")
    console.log(callback)
    callback('이름');
}   
function func2(){
    console.log("func2");
}
func1(func2); // 밑에 함수랑 같다.

console.log("--------------")
func1(function (name){
    console.log("func2");
    console.log("name: ", name)
})

/* var a = 1;
test(a);
test(1); */

//함수한테 함수를 파라미터로 보내서 순서를 정해준 것.