'use strict';
var express = require('express');
var app = express();

var server;

// Add routes defined in other files
// Reminder: Order of routes matters in Express
// Order should be from specific to generic

app.use('/country', require('./routes/country.js'));
app.use('/swagger', require('./routes/swagger.js'));
app.use('/', require('./routes/root.js'));

server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application url: http://%s:%s", host, port);
});


module.exports = app;
