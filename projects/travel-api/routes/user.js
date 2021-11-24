var router = require('express').Router();
var fs = require("fs");
var travelService = require('../services/TravelService');
var countryService = require('../services/CountryService');
var userService = require('../services/UserService');
var log = require('../services/LogService');


router.post('/', async function (req, res) {

    let username = req.body.username;
    let password = req.body.password;

    try {
        await userService.addUser(username, password);
        console.info("[SUCC] addUser");
        res.end(); // send success
        
        // OR if we are tempted to send a message
        // res.end("ok");
        
    } catch (error) {
        // If cannot create user, return bad request.
        console.info("[FAIL] addUser");
        res.status(400).end();
    }
});

router.put('/', async function (req, res) {

    let username = req.body.username;
    let password = req.body.password;

    try {
        await userService.updateUser(username, password);
        console.info("[SUCC] updateUser");
        res.end();

    } catch (error) {
        console.info("[FAIL] updateUser");
        res.status(400).end();
    }
});

router.delete('/', async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    try {
        await userService.deleteUser(username, password);
        console.info("[SUCC] deleteUser");
        res.end();

    } catch (error) {
        console.info("[FAIL] deleteUser");
        res.status(400).end();
    }
});


module.exports = router;