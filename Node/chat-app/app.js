const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const fs =require('fs');
const io = require('socket.io')(server);


app.use(express.static('src'));

app.get("/",function(req, res){
    fs.readFile('./src/index.html',(err, data) => {
        if(err) throw err;
 
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        .write(data)
        .end();
    });
});

io.sockets.on('connection', function(socket){ 
    socket.on('newUserConnect', function (name){
        socket.name = name;        

        var message = name + "님이 접속했습니다.";

        io.sockets.emit('updateMessage', {
            name : "SERVER",
            message : message
        });
    });
    //newUserConnect 접속한다 -> 대화명 저장 -> 메세지 설정 -> 메세지 업데이트 함수호출
    
    
    socket.on('disconnect', function(){
        var message = socket.name + "님이 퇴장했습니다.";
        socket.broadcast.emit('updateMessage', {
            name : "SERVER",
            message : message
        });
    });
    //io.sockets은 나를 포함한 전체 소켓이고
    //socket.broadcase은 나를 제외한 전체 소켓


    socket.on('sendMessage', function (data){
        data.name = socket.name;
        io.sockets.emit('updateMessage', data);
    });

});

server.listen(8080, function(){  
	console.log('서버 실행중...');
});

