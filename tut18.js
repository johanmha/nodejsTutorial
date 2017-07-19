//introduce json

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

	// control for favicon (short-circuit request)
  	if (req.url === '/favicon.ico') {
    	res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    	res.end();
    	//console.log('favicon requested');
    return;
  	}

	console.log('request was made: '+ req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
    name: 'Johan',
    job: 'AI Consultant',
    age: 25
  };
  res.end(JSON.stringify(myObj)); //can only send string or buffer throug res.end
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
