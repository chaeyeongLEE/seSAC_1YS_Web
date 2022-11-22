const express = require("express"); //모듈불러오기
const app = express(); // 객체만들기(필요한 메소드가 app에 있다)
const port = 8080; //포트설정

app.set('view engine', 'ejs') //ejs템플릿을 쓰겠다.

// app.use("/public", express.static("static"));
// static 이라는 실제 존재하는 폴더에 public 경로로 접근할 수 있도록 함.
// src = "/public/img/cats.jpg"

app.use(express.urlencoded({extended:true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); //json형태로 받아볼것. json은 딕셔너리형태와 비슷하다.
// {
//    key: value
// }

app.use("/static", express.static("static"));
// static 이라는 실제 존재하는 폴더에 static 경로로 접근할 수 있도록 함.
// localhost:8080


app.get('/',(req, res)=>{
    res.send("hello express");
})

// req는 client to server 이고, res는 server to client.(응답을 보낸다=send) 이들은 매개변수임.
// localhost:8080/test
// app.get('/test')
app.get('/test',(req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})
// __dirname : C:/~~~~/~~>221122_express

//localhost8080/ejs
app.get('/ejs',(req, res)=>{
  res.render( "index", {
       title: "index 페이지 입니다.",
       data : ["a","b","c"] 
    } );
})
// render한다음에 파일쓰는건 index파일을 클라이언트 한테 보여주겠다.
//app.get('/img',(req, res)=>{
   // res.render( "tests", {
   // title: "tests 페이지 입니다.",
   
   // } );
 // })

app.get("/form",(req, res)=>{
    res.render("form");
})

app.get("/gettest",(req, res)=>{
    res.render("gettest");
})

app.get("/posttest",(req, res)=>{
    res.render("posttest");
})


app.get("/getForm", (req, res)=>{
    console.log(req.query);
    res.send("get 요청성공!"); 
})

app.get("/getFormtwo", (req, res)=>{
    console.log(req.query);
    res.send("회원가입이 완료되었습니다!"); 
})
//위는 send를 사용했기때문에 웹에서 문자열인 요청성공이 보여짐.
app.post("/postFormtwo", (req, res)=>{
    console.log(req.body);
    res.render("result", {data: req.body}); 
})

app.post("/postForm", (req, res)=>{
    console.log(req.body);
    res.render("result", {data: req.body}); 
})

app.listen( port, ()=>{
    console.log("server open : ", port)
})
//위는 웹서버를 여는 코드로 반드시 기억.
