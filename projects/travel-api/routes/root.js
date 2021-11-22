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


// Handling non matching request from the client

router.use((req, res, next) => {
    res.status(404).end();
    // Or use below if we want to display a text message
    // res.status(404).send("<h1>Requested resource not found on the server</h1>")
})


module.exports = router;
