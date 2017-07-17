var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter); //vistnok ikke måten å gjøre det på

var Johan = new Person('Johan');
var Bendik = new Person('Bendik');
var Marius = new Person('Marius');
var people = [Johan, Bendik, Marius];

people.forEach(function(person){
	person.on('speak', function(mssg){
		console.log(person.name + ' said: ' + mssg);
	});
});

Johan.emit('speak', 'Sup?');
Bendik.emit('speak', 'I want food');
Marius.emit('speak', 'Nice is nice');