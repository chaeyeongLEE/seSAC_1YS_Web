/* const num = require('./01_module.js'); */
const {a, b} = require('./01_module.js');
//num = {a:1, b:3}
const a = num.a;
const b = num.b;

function add(){
    return a + b;
}
module.exports = add;

//module.exports = {add}
//result = {add: function(){return a+b}}
//result.add();

/* 중괄호를 안감싸고 보내면 값만 넘어온 것이고
중괄호를 감싸면 키값으로 보내진다. */

/* const result = require('./01_module.js')
console.log(result.a);
console.log(result.b);
console.log(result.test);
result.test(); */

/* .으로 key값 가져오기 */

/* 터미널 열기: control + ~ */