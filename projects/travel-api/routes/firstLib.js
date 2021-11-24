var router = require('express').Router();
var fs = require("fs");
var firstLib = require('first-lib');
var secondLib = require('second-lib');

var log = require('../services/LogService');

// HTTP Verb    Path	                    Function
// GET	        /api/first-lib	            Return message

router.get('/firstLib', async function (req, res) {
    
    log.info("HTTP GET /first-lib");

    res.send(`Result [${firstLib.printMsg()}]`);
})


router.get('/secondLib', async function (req, res) {
    
    log.info("HTTP GET /second-lib");

    res.send(`Result [${secondLib.printHelloWorld()}]`);
})

module.exports = router;