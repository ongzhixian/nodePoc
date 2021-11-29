var router = require('express').Router();
var fs = require("fs");
var travelService = require('../services/TravelService');
var countryService = require('../services/CountryService');
var log = require('../services/LogService');

// HTTP Verb    Path	                    Function
// GET	        /api/travel-info/{id}       Return travel-info for id
// POST	        /api/travel-info	        Add travel info country
// PUT	        /api/travel-info/{id}	    Update travel info
// DELETE	    /api/travel-info/{id}	    Delete travel info


router.get('/:id', async function (req, res) {
    
    const PARAM_ID = 'id';
    
    let id = ''

    if (PARAM_ID in req.params)
        id = req.params[PARAM_ID];

    log.info("MOCK travel-info ID: [%s]", id);

    res.send(JSON.stringify({
        code: id,
        riskLevel: 1
    }))
    // res.send(`TODO: return travel info for id: [${id}]`);
    // res.send(await countryService.mgGetCountry(id));
    // res.send(await countryService.getCountry(id));
})

router.post('/', function (req, res) {
    res.send('TODO: add country detail');
});

router.put('/:id', function (req, res) {
    res.send('TODO: update country detail');
});

router.delete('/:id', function (req, res) {
    res.send('TODO: update country detail');
});

module.exports = router;