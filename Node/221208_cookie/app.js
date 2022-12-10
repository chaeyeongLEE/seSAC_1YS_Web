const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.use( express.static( 'public' ) );
app.use(cookieParser()); // 쿠키를 사용하겠다는 미들웨어 등록



// app.get("/",(req,res)=> {
//     if(req.cookies.) res.render("ejs파일명", {popup:"none"});
//     else{res.render("ejs 파일명", {popup:"display"});}
// })

//if(req.cookies.NM_POPUP) res.render("ejs파일명", {popup:"none"});
//else{res.render("ejs 파일명", {popup:"display"});}

//document.cookies();

const option = {
    httpOnly: true, // 클라이언트가 document.cookie로 접근할 수 없게 함. false는 접근가능하게 함.
    maxAge: 60*60*24*1000//  만들어진 순간부터 초만큼 뒤에 만료됨(밀리초 ms 단위) ex. 30000->30초 뒤에 만료
    // path: "/visitor", // localhost:8000 쿠키가 없음. localhost:8000/visitor/~~~~ 쿠키가 있음
    // secure: "false",// true는 https 보안 서버에만 적용됨(http뒤의 s는 secure의 보안을 의미)
    // signed: true //암호화하고싶으면 true 작성. default는 false 
};
app.get("/",(req,res)=>{
    // req.cookies.popup 값을 비교해서 1이 아니면, 을 클릭하지않았을 수 있으니 if문 작성. 아니면 "none"
    if(req.cookies.popup == "1") res.render("index",{popup:"display"});
    else res.render("index", {popup:"block"});
});

app.post("/setpopup",(req,res)=>{
  res.cookie("popup","1",option);
  //1. 쿠키를 만든다. 이 사람이 오늘 하루 열지않음을 클릭했음을 구분하는 쿠키 생성
  // {popup:1}이라는 쿠키를 만들었다.
  res.send(true);
   //2. 서버 응답(res의 헤더변경)
});


app.get("/set", (req, res)=>{
    res.cookie("test", "1", option);
    res.send("쿠키 생성 성공");
});

app.get("/get", (req, res)=>{
    console.log(req.cookies); 
    console.log(req.cookies.test); 
    res.send(req.cookies);
});
    //서버에서 쿠키를 가져와보고싶은 경우 . 쿠키는 애초에 브라우저(클라이언트)가 갖고있음. 
    //그래서 req객체를 통해 쿠키에 접근해 가져오기.

app.listen(port, ()=>{
    console.log("server open", port);
})