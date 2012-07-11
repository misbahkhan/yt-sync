var ytsync = exports;

//
// Remark: Don't require client file server-side for now
//
//  ytsync.client = require('./youtube-sync/client');

var express = require('express'),
  browserify = require('browserify');

ytsync.createServer = function () {
  var app    = express.createServer(),
      bundle = browserify(__dirname + '/youtube-sync/client.js'),
      io     = require('socket.io').listen(app);

  app.configure(function(){
    app.use(express.static(__dirname + '/../public'));
  });

  //
  // Serve browserified client.js file as bundle
  //
  app.use(bundle);

  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    console.log('emitted');
    socket.on('resp', function(data) {
      console.log(data);
    });
  });

  return app;
};

