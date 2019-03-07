var fs = require('fs');
var Logger = exports.Logger = {};

var infoStream = fs.createWriteStream('logs/info.txt');

var errorStream = fs.createWriteStream('logs/error.txt');

var debugStream = fs.createWriteStream('logs/debug.txt');


// logger function for to write success msg

Logger.info = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    infoStream.write(message);
};

// logger function for to write debugmsg

Logger.debug = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    debugStream.write(message);
};


// logger function for to write error msg

Logger.error = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
};