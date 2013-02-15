var net = require('net');

net.createServer(function(socket) {

// new client connect
	socket.on('connect', function(data){
		console.log("connection from " + socket.remoteAddress);
		socket.write("welcome\n");
	});

	socket.on('data', function(data) {
		console.log("client said " + data);
		socket.write("you said " + data + " is gangster");
	});

	   // Disconnect event
    socket.on('end', function(){
    	//Log it to the server output
    	console.log("someone left us.")
   	});

}).listen(5000);

console.log("tcp server started on 5000");