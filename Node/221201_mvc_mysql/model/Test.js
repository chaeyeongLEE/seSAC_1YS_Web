exports.hello = function(){
    return "hello";
}



// export는 나중에 불러와서 쓰기위해서 사용

exports.test = function(){
    return [
        {id:"a", name:"김소연"},
        {id:"b", name:"김소연"},
    ];
}

exports.login = function(){
    return { id: "1", pw: "1234"}
}


// function() 는 (req, res)와 동일하다.
// mysql에서 가져온 값을 여기서 조회해서 return 

