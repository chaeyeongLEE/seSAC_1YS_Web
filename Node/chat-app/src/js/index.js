'use strict';

var socket = io();

socket.on('connect',function(){
    var name = prompt('대화명을 입력해주세요!','');
    socket.emit('newUserConnect', name);
});

//prompt는 window 메소드로 사용자가 텍스트를 입력할 수 있는 대화상자를 띄웁니다.
//대화명을 입력받은 후 name 변수에 담아줍니다.

var chatWindow = document.getElementById('chatWindow');
socket.on('updateMessage', function(data) {
    if(data.name === "SERVER"){
        var infoEl = document.getElementById('info');
        infoEl.innerHTML = data.message;

        setTimeout(()=>{
            infoEl.innerText = '';
        }, 1000);

    }else{
        var chatMessageEl = drawChatMessage(data);
        chatWindow.appendChild(chatMessageEl);
    }
});

function drawChatMessage(data){
    var wrap = document.createElement('p');
    var message = document.createElement('span');
    var name = document.createElement('span');

    name.innerText = data.name;
    message.innerText = data.message;

    name.classList.add('output__user__name');
    message.classList.add('output__user__message');

    wrap.classList.add('output__user');
    wrap.dataset.id = socket.id;
   
    wrap.appendChild(name);
    wrap.appendChild(message);

    return wrap;
}

var sendButton = document.getElementById('chatMessageSendBtn');
var chatInput = document.getElementById('chatInput');

sendButton.addEventListener('click', function(){
    var message = chatInput.value;
    //message는 input의 value값이 됨
    if(!message) return false;
    //message가 비었을 경우 전송되면 안되니까 false
    socket.emit('sendMessage', {
        message
    });

    chatInput.value = '';
    //emit 후에 input의 valuer 값을 비워줍니다. 비워주지않으면 전송 후에도 input에 메세지가 그대로 있다.
});