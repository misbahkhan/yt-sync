//
// Remark: This file is intended to be browserfied and served to the client
//

var client = exports;

var $ = require('jquery'),
    ytapi = require('youtube-player')

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