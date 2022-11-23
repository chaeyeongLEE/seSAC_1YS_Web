//const { url } = require("inspector");
const url = require("url");
/* console.log(url);
console.log(url.parse); */
//var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9');
//console.log(obj); //클래스 객체다.
/* console.log(url.URL); */
//console.log(url.format(obj));
/* 스트링으로 다시 바꾸는 함수 format */

//console.log(obj.protocol);

//var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9")
var string = new url.URL("http://localhost?name=sesac&name=코딩온&age=10") //key=value
//물음표 뒤에 내용 컨트롤 하는 방법
console.log(string.searchParams.getAll('name'));
console.log(string.searchParams.keys()); // 물음표 뒤의 내용을 나눠놓은 것.
string.searchParams.append('age','20');
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age')); //존재하면 true 