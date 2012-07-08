var ytsync = exports;

//ytsync.client = require('./youtube-sync/client');
ytsync.createServer = function () {
  var express = require('express'),
	  app = express.createServer();

  app.configure(function(){
  	app.use(express.static(__dirname + '/../public'));
  });
  //
  // TODO: Add http server logic
  //

  // Don't forget to...
  return app;
};