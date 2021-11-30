var router = require('express').Router();
var fs = require("fs");
var log = require('../services/LogService');
const jwt = require('jsonwebtoken');

// SECRET FOR JWT
let secret = 'some_secret'; // a secret key is set here

/* Create token to be used */
router.get('/token/sign', (req, res) => {
    var userData = {
        "name": "My Name",
        "id": "1234"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '15s'})
    res.status(200).json({"token": token});
});

// router.get('/', async function (req, res) {
    
//     log.info("HTTP GET /country");

//     const STARTS_WITH = 'startswith'

//     let startsWith = '';

//     if (STARTS_WITH in req.query)
//         startsWith = req.query[STARTS_WITH];

    
//     log.info("startsWith: [%s]", startsWith);

//     let result = await countryService.mgGetCountries(startsWith);

//     log.info("result count: [%d]", result.length);

//     // res.send(await countryService.getCountries(startsWith));
//     res.send(result);
// })


module.exports = router;
