const Test = require("../model/Test");
//test.js를 모듈로 읽어오겠다는 의미

exports.main = (req, res) => {
    let hi = Test.hello(); //함수호출. hello라는 문자열이 여기서 hi 에 담김
    res.send(hi)
    //res.render("index");
}

exports.test = (req, res) => {
    res.send("test");
}

exports.post = (req, res) => {
    res.send("test");
}

exports.post = (req, res) => {
    res.render("practice1");
}

exports.good = (req, res) => {
    let infom = Test.login();
    if ( req.body.id == infom.id && req.body.pw == infom.pw ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
}

var users=
'spreatics//1234//스프레틱스","codee//4321//코디';

exports.loginPost2 = (req, res) => {
    let users = User.User2();
    let user_list = users.split("\n")       //엔터를 기준으로 자른다
    // user_list = ["spreatics//1234//스프레틱스","codee//4321//코디"];
    let login_flag = false;
    let name = "";
    for(let i = 0; i < user_list.length; i++){
        let user = user_list[i].split("//")
        // user = ["spreatics","1234","스프레틱스"]
        if (req.body.id == user[0] && req.body.pw == user[1]) {
            login_flag = true;
            name = user[2];
            break;
            }
        }

        if(login_flag) res. send('${name}님 환영합니다.');
        else res.send('로그인 실패');
    }

//module.exports = {
//    main: main,
//    test: test,
//    post: post
//}
