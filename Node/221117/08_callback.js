/* call back 함수 */
/* function func1(value, call){
    console.log(value);
    call();
}
//func1은 call이라는 파라미터로 받아서 그 파라미터를 실행하고 있다.
func1('a', function(){
    console.log("1");
});
function func2(){
    console.log("2");
}
func1(func2); */

console.log("start");
function login(id, cb){
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id); // 안에서 모든 작업이 성공한 후 이걸 실행시켜라
        //return id; //아무리 return을 해도 들어가지 않는다.
    }, 2000); //timeout 메소드는 비동기, 결과를 기다리지 않는다.
}
 login('kim', function(id){
    console.log(id + "님 환영합니다.")
 });
//console.log(id + "님 환영!");
console.log("finish");
//동기는 순서대로 비동기는 순서가 없어서 강제로 순서를 부여함.