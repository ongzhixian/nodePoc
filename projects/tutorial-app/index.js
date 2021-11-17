'use strict';
var express = require('express');
var app = express();
var fs = require("fs");

var settings,
    server;
// Add routes defined in other files

app.use('/', require('./controllers/route_user.js'));
app.use('/wiki', require('./controllers/route_wiki.js'));

// Get settings from a 'settings.json' file.
try {
    settings = JSON.parse(fs.readFileSync('settings.json'));
} catch (error) {
    console.error(error);
}

// These 2 lines retrieves the same result.
// console.log(settings['host']['port']);
// console.log(settings.host.port);

server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("tutorial-app listening at http://%s:%s", host, port);
});

module.exports = app;