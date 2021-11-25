var router = require('express').Router();
var fs = require("fs");
var travelService = require('../services/TravelService');
var countryService = require('../services/CountryService');

var authenticationService = require('../services/AuthenticationService');
var log = require('../services/LogService');


router.get('/', async function (req, res) {
    
    res.send(await authenticationService.getUsers());
    
    // res.send('TEST: Workgng');
});

router.post('/', async function (req, res) {
    console.info('POST /authentication');

    let username = req.body.username;
    let password = req.body.password;

    try {
        let result = await authenticationService.authenticateUser(username, password);

        if (result != true) 
            throw new Error('Invalid username or password');

        console.info("[SUCC] authenticateUser");
        res.send(JSON.stringify({
            status: 'success',
            error: null
        })).end();

    } catch (error) {
        console.info("[FAIL] authenticateUser");
        // res.status(400).end();
        res.send(JSON.stringify({
            status: 'fail',
            error: error
        })).end();
    }
});

module.exports = router;