const User = require("../model/User");

exports.register = (req, res) => {
    let inform = User.register();
    res.render("index");
}

exports.login = (req, res) => {
    let inform = User.register();
    res.send('회원가입이 완료되었습니다!');
}

