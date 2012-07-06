#!/usr/bin/env node

var express = require("express"),
    app = express.createServer(),
    io = require('socket.io').listen(app); 
                                           

app.configure(function(){
  app.use(express.static(__dirname + '/../public'));
});

io.sockets.on('connection', function (socket) {
  
  socket.emit('ping', { msg: 'Hello. I know socket.io.' });

  socket.on('pong', function (data) {
    console.log(data.msg);
  });

});

app.listen(8080);

console.log('socket.io server started on port 8080');
