var ytsync = exports;

ytsync.client = require('./youtube-sync/client');

var express = require('express'),
  browserify = require('browserify');

ytsync.createServer = function () {
  var app = express.createServer(),
  io = require('socket.io').listen(app);

  app.configure(function(){
    app.use(express.static(__dirname + '/../public'));
  });

  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    console.log('emitted');

    socket.on('resp', function(data){
      console.log(data);
    });
  });

  var b = browserify(opts={watch:true});
  return app;
};

