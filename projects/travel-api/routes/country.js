var router = require('express').Router();
var fs = require("fs");
var travelService = require('../services/TravelService');
var countryService = require('../services/CountryService');
var log = require('../services/LogService');

// HTTP Verb    Path	                    Function
// GET	        /api/country	            Return all countries
// GET	        /api/country/{id}	        Return specific country details
// POST	        /api/country	            Add details for new country
// PUT	        /api/country/{id}	        Update country details
// DELETE	    /api/country/{id}	        Delete country details

 
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', async function (req, res) {
    
    log.info("HTTP GET /country");

    const STARTS_WITH = 'startswith'

    let startsWith = '';

    if (STARTS_WITH in req.query)
        startsWith = req.query[STARTS_WITH];

    res.send(await countryService.getCountries(startsWith));
})

router.get('/:id', async function (req, res) {
    
    const PARAM_ID = 'id';
    
    let id = ''

    if (PARAM_ID in req.params)
        id = req.params[PARAM_ID];

    res.send(await countryService.getCountry(id));
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


// The hard way to get request body
// Previously the 'Express' framework packaged 'body-parser' to parse the request body.
// But this is no longer the case; we need to manually add 'body-parser' package for the convenience now.
// This chunk of code demonstrates how to get the request body without using 'body-parser':
// router.post('/', function (req, res) {
//     let request_body = '';
//     req.on('data', buffer => {
//         request_body += buffer.toString(); // convert Buffer to string
//     });
//     req.on('end', () => {
//         let json_body = JSON.parse(request_body, (err, data) => {
//             res.end(err ? err : data);
//         });
//         console.log(json_body);
//         res.end('ok');
//     });
//     // res.send('TODO: add user detail');
// });


// var user = {
//     "user4": {
//         "name": "mohit",
//         "password": "password4",
//         "profession": "teacher",
//         "id": 4
//     }
// }

// app.get('/listUsers', function (req, res) {
//     // fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//     //     console.log(data);
//     //     res.end(data);
//     // });
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse(data);
//         data["user4"] = user["user4"];
//         console.log(data);
//         res.end(JSON.stringify(data));
//         let out_data = JSON.stringify(data, null, 4);
//         debugger;
//         fs.writeFileSync('users.json', out_data);
//     });
// })

// app.post('/addUser', function (req, res) {
//     // First read existing users.
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse(data);
//         data["user4"] = user["user4"];
//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// })

// app.get('/:id', function (req, res) {
//     // First read existing users.
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         var users = JSON.parse(data);
//         var user = users["user" + req.params.id]
//         console.log(user);
//         res.end(JSON.stringify(user));
//     });
// })

// var id = 2;

// app.delete('/deleteUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + 2];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

module.exports = router;