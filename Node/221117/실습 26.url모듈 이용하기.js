const url = require("url");
var params = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
console.log(params.searchParams.keys());
console.log(params.searchParams.values());
params.searchParams.delete('sm')
console.log(params.searchParams.keys());