//
// client.js - youtube-sync client logic
// This module is intended to be browserfied and served to the browser
//

var client = exports;
var io = require('socket.io-client');

//
// jQuery will get pulled in from the CDN in index.html.
// This will make $ globally available ( and available in the scope of this file )
// Going to bind window.$ to the current scope for clarity of where $ is coming from
//
var $ = window.$;

var socket = io.connect('http://localhost:8000');

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