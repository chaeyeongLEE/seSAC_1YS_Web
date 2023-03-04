const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index3.html");
});

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
io.on("connection", (socket) => {
  console.log("Server Socket Connected");

  io.emit("notice", socket.id + "님이 입장하셨습니다.");

  //socket.emit("welcome", { msg: "welcome" });
  // socket.emit('response', msg + " : " + data[msg])

  socket.on("response", (str) => {
    console.log(str);
  });

  //   socket.on("hello_e", (msg) => {
  //     console.log(msg);
  //     socket.emit("response", "hello : 안녕하세요!");
  //   });

  //send라는 이벤트로 송신이 오면 메시지가 msg에 담김
  socket.on("send", (msg) => {
    console.log(msg);
    socket.emit("response", msg + " : " + data[msg]);
    // data['hello'] = '안녕하세요!' , 다시 response로 문자열 포함하여 송신
  });

  socket.on("disconnect", () => {
    console.log("Server Socket disconnected");
  });
});

http.listen(8080, () => {
  console.log("Server port : ", 8080);
});
