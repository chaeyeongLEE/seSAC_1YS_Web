const { User } = require("../model");

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = (req,res) => {
    var data = {
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw
    }

    User.create(data)
    .then(()=>{ res.send(true); })

    // User.post_signup(req.body, function(result){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = (req,res) => {
    User.findOne({
        where: {
            id: req.body.id,
            pw: req.body.pw
        }
    }).then((result)=>{
        if ( result ) res.send(true);
        else res.send(false);
    })

    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
}

exports.profile = (req,res) => {
    User.findOne({
        where: { id: req.body.id }
    }).then((result)=>{
        if ( result ) res.render("profile", {data: result});
        else res.redirect("/user/signin");
    })

    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = (req,res) => {
    var data = {
        name: req.body.name,
        pw: req.body.pw
    }
    User.update(data, {
        where: { id: req.body.id }
    }).then(()=>{
        res.send(true);
    })

    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
}

exports.profile_delete = (req,res) => {
    User.destroy({
        where: { id: req.body.id }
    }).then(()=>{
        res.send(true);
    })

    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
}