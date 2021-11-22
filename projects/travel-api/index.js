'use strict';
var express = require('express');
var app = express();
var settings = require('./services/AppConfigurationService');

var server;

// 'settings' usage example
console.log("Mode: [%s]", settings['mode']);
// console.log(settings.mode); // Alternate syntax

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
