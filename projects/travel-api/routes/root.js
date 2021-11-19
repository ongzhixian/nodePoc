var router = require('express').Router();


// Handle '/' requests

router.get('/', function (req, res) {
    res.send("");
})

// Handle /favicon.ico requests

router.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // This is the proper way to send a HTTP 204 response.
});

// Or use below if we want to return a favicon image 
// Require: `var resolve = require('path').resolve;`

// router.get('/favicon.ico', function (req, res) {
//     res.sendFile(resolve("./public/images/favicon.png"));
// });


module.exports = router;