var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
  http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.write('I hear a scream')
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
