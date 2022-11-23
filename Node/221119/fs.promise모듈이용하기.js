const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if( err ) console.log(err); //그냥 console.log하면 data: undefined
    //if(err) throw err -> throw하면 그 즉시 멈춤
    console.log("data: ", data);
});

const fs2 = require("fs").promises; //프로미스로 되어 있는 함수를 쓸 수 있음.
fs2.readFile("./test.txt")
    .then((data)=>{
        console.log("promise - data: ", data);
    })
fs2.writeFile("./sesac.txt", '반갑습니다.')
    .then(function(result){
        console.log("result: ", result);
        return fs2.readFile('./sesac.txt') //then끼리 연결할 때는 return을 사용해야 한다.
    })
    .then(function(data){
        console.log(data.toString());
        return fs2.copyFile('./sesac.txt', './sesac2.txt')
    })
    .then(function(){
        fs2.rename('./sesac2.txt', './new.txt')
    })