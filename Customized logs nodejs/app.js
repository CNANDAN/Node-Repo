const express = require('express');
const request = require('request');
var logger = require('./logger').Logger; //created a custom logs on this folder

var app = express();
var port =3000;

var url = "";  //define your url in here to request
request(url, (error, response, body) =>{
    console.log("Body:", body);
    logger.info(body);  // writing the data to log file
//  logger.debug("your content"); for debug
//  logger.error("your content"); //for error
});

app.listen(port,(res,err) => {
    if(err) throw err;
    console.log("connected to port "+port);
});
