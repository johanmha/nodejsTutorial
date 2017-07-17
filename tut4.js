//#1 timeout
setTimeout(function(){
	console.log('3 Secounds have passed');
},3000);

//#2 interval
var time = 0;
var timer = setInterval(function(){
	time += 2;
	console.log(time + ' seconds have passed');
	if (time > 5){
	clearInterval(timer);
	}
}, 2000);

//#3 Print dir and file name with dir 
console.log(__dirname);
console.log(__filename); // Check global for further posibilities