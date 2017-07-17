var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data){
	fs.writeFile('writeMe.txt', data);
});

// can as well be don syncronously by adding Sync as "readFileSync". This
//blocks the code execution. Other functions of fs are e.g. mkdir and rmdir