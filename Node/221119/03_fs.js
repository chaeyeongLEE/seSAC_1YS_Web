const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if( err ) console.log(err); //그냥 console.log하면 data: undefined
    //if(err) throw err -> throw하면 그 즉시 멈춤
    console.log("data: ", data);
    console.log("data: ", data.toString()); // String(data) =>문자열로 바꾸는 법
    console.log("data: ", String(data));
});

const fs2 = require("fs").promises; //프로미스로 되어 있는 함수를 쓸 수 있음.
fs2.readFile("./test.txt")
    .then((data)=>{
        console.log("promise - data: ", data);
    })
    fs2.writeFile("./write.txt", 'sesac')
    .then(function(result){
        console.log("result: ", result);
        return fs2.readFile('./write.txt')
    })
    .then(function(data){
        console.log(data.toString());
    });

fs.writeFile('./write2.txt', 'codingon', function(err){
    if (err) throw err;
    console.log("WriterFile success");
    fs.readFile("./write2.txt", function(err, data){
        if(err) throw err;
        console.log("write2File data: ", data.toString());
    })
})