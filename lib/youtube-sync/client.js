//
// Remark: This file is intended to be browserfied and served to the client
//

var client = exports;
var io = require('socket.io-client');

var socket = io.connect('http://localhost:8000');

socket.on('connect', function () {
  // socket connected
});
socket.on('news', function (data) {
  console.log(data);	
  socket.emit('resp', 'response');
});


var ytapi = require('youtube-player');
var p = PLAYER = new ytapi({id: 'yt_player', width: 720, height: 480});

$(document).ready(function(){
  p.on('change', function (state) {console.log(state);});
  p.play('B05Dl4iL21M');
});



client.getCurrentVideo = function (sessionID, callback) {
  console.log("client.getCurrentVideo");
  var video = new Video(sessionID.vidya);
  // goes to the server, performs callback
  return callback(null, video)
}

// There are admin functions
client.broadcastCurrentVideo = function (video, callback) {
  // video object has metadata about track events, such as current time
  return server.send(video, callback);
};