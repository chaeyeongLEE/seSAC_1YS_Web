/* setTimeout(function(){ //익명 형태
    console.log("1.5초 후 실행");
}, 1500) //밀리세컨 */

//function a() {console.log("1.5초 후 실행");}
//setTimeout(a, 1500);

const func1 = setTimeout(function(){
    console.log("1.5초 후 실행");
}, 1500)
const func2 = setInterval(function(){
    console.log("1초마다 반복");
}, 1000)
const func3 = setTimeout(function(){
    console.log("func3 실행");
}, 3000)
setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500)
const func4 = setImmediate(()=>{
    console.log("func4 즉시 실행");
})
const func5 = setImmediate(()=>{
    console.log("func5 즉시 실행");
})
clearImmediate(func5);