/* global 내장객체 */

console.log(global);
global.console.log(global.console);

/* console이라는 객체는 글로벌 객체에 있다. 
글로벌은 전역 객체이다. 
글로벌은 생략이 가능하다*/

/* console 내장객체 */
/* console객체는 global에 위치
console은 어디서든 사용 가능하다.*/

let obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.time("시간"); //time과 timeEnd에 들어가는 건 똑같아야 시간 측정 가능.
console.error('error');
console.timeEnd("시간");
console.table([{name:'abc'}, {name:'def'}]);//console을 표 형태로 보여준다.
console.dir(obj,{colors: true, depth:1});//객체의 구조를 보여줌. / depth: 1 => 1단계까지 보겠다.
console.dir(obj,{colors: true, depth:2});//deotg: 2 => 2단계까지 보겠다.
console.trace("Error");