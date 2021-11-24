var router = require('express').Router();
var fs = require("fs");
var travelService = require('../services/TravelService');
var countryService = require('../services/CountryService');
var log = require('../services/LogService');


router.post('/', function (req, res) {
    res.send('TODO: perform authentication');
});

module.exports = router;