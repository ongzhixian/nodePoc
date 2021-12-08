'use strict';
var express = require('express');
var expressJwt = require('express-jwt');
const cors = require('cors');
var app = express();
var settings = require('./services/AppConfigurationService');

var server;

// 'settings' usage example
console.info("Settings (read from 'settings.json')");
console.info("Name:      [%s]", settings['name']);
console.info("Version:   [%s]", settings['version']);
console.info("Mode:      [%s]", settings['mode']);
console.info("Port:      [%s]", settings['port']);
// console.log(settings.mode); // Alternate syntax
// SECRET FOR JWT
let secret = 'some_secret'; // a secret key is set here


// Setup middleware for parsing request body
// app.use(bodyParser.urlencoded({extended: true}));    // Parse url-encoded body using body-parser package
// app.use(bodyparser.json());                          // Parse JSON body using body-parser package
// If using Express4.16+, use the following instead of the above:
// app.use(express.urlencoded());   // For parsing URL-encoded bodies
app.use(express.json());            // For parsing JSON bodies

app.use(cors({
    // origin: 'https://localhost:4200'
    origin: '*'
}));


// Setup middleware for JWT
// app.use(
//     expressJwt({ secret: secret, algorithms: ['HS256']})
//     .unless({ 
//         path: [
//             '/jwt/token/sign'
//         ]
//     })
// );

// app.use(function (err, req, res, next) {
//     console.log("GENERIC: [%s]", req.url);
//     console.log("errname: [%s]", err.name);

//     if (err.name === 'UnauthorizedError') {
//         console.log("NOT AUTHORIZED: [%s]", req.url);
//         res.status(401).send('invalid token...').end();
//         return;
//     }

//     next();
// });

// Add routes defined in other files
// Reminder: Order of routes matters in Express
// Order should be from specific to generic

app.use('/api/authentication', require('./routes/authentication.js'));
app.use('/jwt', require('./routes/jwt.js'));
app.use('/api/user', require('./routes/user.js'));
app.use('/country', require('./routes/country.js'));
app.use('/travel-info', require('./routes/travel-info.js'));
app.use('/swagger', require('./routes/swagger.js'));
app.use('/test-lib', require('./routes/firstLib.js'));
app.use('/', require('./routes/root.js'));

server = app.listen(settings['port'], function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application url: http://%s:%s", host, port);
});


module.exports = app;
