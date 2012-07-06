var socket = io.connect('/');
 
$(function(){
	socket.on('ping', function(data){
		$("#msg").html(data.msg);
		console.log(data.msg);
	});
});