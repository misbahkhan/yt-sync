var ytsync = exports;

//ytsync.client = require('./youtube-sync/client');

  var express = require('express');
  var browserify = require('browserify');
	
ytsync.createServer = function () {
  var app = express.createServer();

  app.configure(function(){
  	app.use(express.static(__dirname + '/../public'));
  });

  var b = browserify(opts={watch:true});
  
  //
  // TODO: Add http server logic
  //

  // Don't forget to...
  return app;
};