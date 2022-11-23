function call(name, cb) {
    setTimeout(function(){
        console.log("사용자는 kim" )
        cb(name);
    }, 2000)
}
function back(back, cb) {
    setTimeout(function(){
        cb(back);
    }, 1000)
}
function hell(hell, cb) {
    setTimeout(function(){
        cb(hell);
    }, 500)
}
call('call',function(name){
    console.log("시작은 " + name)
    back('back', function(back){
        console.log("두번째는 " + back)
        hell('hell', function(hell){
            console.log("세번째는 " + hell)
        })
    })
})