// events module exist by default in node
var events = require('events');

var Eventemitter = new events.EventEmitter();

Eventemitter.on('sayHello', function (name) {
    console.log('Hello ' + name);
})

Eventemitter.emit('sayHello', 'Khalaf');

var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var person1 = new Person('aya');
var person2 = new Person('basma');
var person3 = new Person('mama');

var persons = [person1, person2, person3];

persons.forEach(person => {
    person.on('sayHello', function () {
        console.log('Hello ' + this.name);
    });
});
console.log(person1);
person1.emit('sayHello');
