var router = require('express').Router();
var fs = require("fs");

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
router.get('/', function (req, res) {
    res.send('TODO: return list of countries');
})

router.get('/:id', function (req, res) {
    res.send('TODO: return specific country');
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