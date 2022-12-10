const express = require("express");
const session = require("express-session");
const app = express();
const port = 8080;

app.use(session({
   secret:'1234', //암호화할 문자열. 임의의 문자열로 세션을 암호화함. 무조건 작성해야한다. 
   resave: false, //변경사항. true: 모든 요청마다 session에 변화가 없어도, session을 다시 저장함.
   saveUninitialized: true// 초기화되지않은 세션을 저장하냐마냐. 
  // cookie:{
  //  httpOnly:~
//}
  // secure:  //true 보안서버에서만 작동
}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs')
app.use( express.static( 'public' ) );


//<-------------->
const user = {id: "a", pw: "1"};

app.get("/",(req, res)=>{
  console.log(req.session.user);
  if(req.session.user) res.render("first", {isLogin: true, id: req.session.user});
  else res.render("first", {isLogin: false});
})

app.get("/login",(req,res)=>{
    console.log("login");
})

app.post("/login", (req, res)=>{
  if(req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.send(true);
  } else {
    res.send(false);
  }
})

app.get("/logout", (req, res)=> {
    req.session.destroy(function(err){
      if(err) throw err;

      res.redirect("/");
    })
})
/*
app.get("/first",(req, res)=>{
    //res.render("first");
    if(req.session.user) res.render("first", {isLogin: true})
    else res.render("first", {isLogin: false})
//    res.send("세션 수업");
});


app.get("/first", (req,res)=>{
    // cookies = {}
    // req.session = {}
    
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        // 내 공간에 내 아이디 저장(세션에 내 정보 저장)
        // req를 쓰는이유는 개인 고유의 세션을 가져야하니까.
        res.send("로그인 성공");
    }
    else{
        res.send("로그인 실패");
    }
        res.send("세션 생성 성공");
})
// 로그인정보가 맞는지를 판단하는 조건문

app.get("/login", (req, res) => {
    res.render("login");
})


app.delete("/logout", (req,res)=>{
  req.session.delete(function(err){
    if(err) throw err;
    res.send("로그아웃 성공");
  })
})


app.get("/setSession", (req, res)=>{
req.session.user = "id";
res.send("세션 생성 성공");
})
*/
app.listen(port, ()=>{
    console.log("server open", port);
})
