const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){ //클라이언트가 접속했을 때 이 함수를 실행시켜라!
    /* res.write("<h1>Hello33</h1>") //request: 클라이언트에 요청 respond: 서버에 응답
    res.end("<hr>"); //write나 end를 쓰면 얘가 HTML파일로 읽어서 전달 */
    fs.readFile('./test.html')
    .then(function(data){
        res.end(data.toString());
    })
});

/* server.on()//이벤트를 등록
server.listen()//서버를 실행하고 클라이언트를 기다린다.
 */

server.listen(8080, function(){//8080번 포트로 이 서버를 열거다.
    console.log('8080번 포트로 실행')
})
//ctrl + c로 빠져나올 수 있다.
//수정을 하면 다시 실행을 해서 다시 접속을 해야한다.