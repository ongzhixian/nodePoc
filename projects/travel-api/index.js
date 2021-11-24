'use strict';
var express = require('express');
var app = express();
var settings = require('./services/AppConfigurationService');

var server;

// 'settings' usage example
console.log("Mode: [%s]", settings['mode']);
// console.log(settings.mode); // Alternate syntax

// Setup middleware for parsing request body
// app.use(bodyParser.urlencoded({extended: true}));    // Parse url-encoded body using body-parser package
// app.use(bodyparser.json());                          // Parse JSON body using body-parser package
// If using Express4.16+, use the following instead of the above:
// app.use(express.urlencoded());   // For parsing URL-encoded bodies
app.use(express.json());            // For parsing JSON bodies

// Add routes defined in other files
// Reminder: Order of routes matters in Express
// Order should be from specific to generic

app.use('/api/authentication', require('./routes/authentication.js'));
app.use('/api/user', require('./routes/user.js'));
app.use('/country', require('./routes/country.js'));
app.use('/swagger', require('./routes/swagger.js'));
app.use('/test-lib', require('./routes/firstLib.js'));
app.use('/', require('./routes/root.js'));

server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application url: http://%s:%s", host, port);
});


module.exports = app;
