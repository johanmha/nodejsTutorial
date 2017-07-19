//introduce json

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  if (req.url === '/favicon.ico') { // control for favicon (short-circuit request)
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    //console.log('favicon requested');
    return;
  }

  console.log('request was made: '+ req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/flatMates'){
    var flatMates = [{name: 'Johan', age: 25}, {name: 'Bendik', age: 23}, {name: 'Marius', age: 24}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(flatMates));
  } else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});


server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
