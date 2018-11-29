var events = require ('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',(msg) =>{
	console.log(msg);
})

myEmitter.emit('someEvent','My First event');


//Advance example
//utill module is used to inherit property of object
// util module is used to create object
var util = require ('util');
var Person = function(name){
	this.name = name ;
}

util.inherits(Person, events.EventEmitter);
var kundan = new Person("Kundan");
var keshri = new Person("keshri");
var kumar = new Person("kumar");
var people = [kundan,keshri,kumar];
people.forEach(function(person){
	person.on('speak',function(mssg){
		console.log(person.name + ' said ' + mssg)
	})
});

kundan.emit('speak','Hello World');
