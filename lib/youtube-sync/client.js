//
// Remark: This file is intended to be browserfied and served to the client
//

var client = exports;
var ytapi = require('youtube-player');

var p = PLAYER = new ytapi({id: 'yt_player', width: 720, height: 480});

$(document).ready(function(){
	p.on('change', function (state) {
  		console.log(state);
	});

	p.play('_RRnyChxijA');
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