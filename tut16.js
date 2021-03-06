//Read stream and pipe to server
//Bonus - short-circuit favicon request

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

	// control for favicon
  	if (req.url === '/favicon.ico') {
    	res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    	res.end();
    	//console.log('favicon requested');
    return;
  	}

	console.log('request was made: '+ req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + '/LoremIpsum.txt', 'utf8');
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
