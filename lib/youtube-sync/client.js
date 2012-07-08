//
// Remark: This file is intended to be browserfied and served to the client
//

var client = exports;

var $ = require('jquery-browserify'),
ytapi = require('youtube-player');

var p = PLAYER = new ytapi({id: 'yt_player', width: 400, height: 300});

p.on('change', function (state) {
  console.log('change', state, Object.keys(p.player))
});

p.play('wusGIl3v044');

p.on('end', function () {
  console.log('THE END')
});

p.on('ready', function (state) {
  console.log('EVENT')
});

client.getCurrentVideo = function (sessionID, callback) {
  var video = new Video(sessionID.vidya);
  // goes to the server, performs callback
  return callback(null, video)
}

// There are admin functions
client.broadcastCurrentVideo = function (video, callback) {
  // video object has metadata about track events, such as current time
  return server.send(video, callback);
};