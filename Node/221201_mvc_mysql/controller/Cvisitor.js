const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor",{data: result});
    })
}


exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id));
    })
    // insert req.body 
    // 
}

exports. delete = (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete -> model에서 해야하는 작업
    // 서버 응답. 즉 res.send를 해야한다. 
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true);
    })
}

exports. get_visitor_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    res.send(rows);
    });
}

exports.update_visitor = (req, res) => {
    // req.body.id에 해당하는 데이터를 mysql에 업데이트를 할 수 있도록 해야함
    // 서버에 응답을 보내기
    Visitor.update_visitor(req.body, function(){
        res.send(true);
    }); 
}