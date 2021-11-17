var express = require('express');
var router = express.Router();
var fs = require("fs");

// exports.user_test = app.get('/test', function (req, res) {
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//         console.log(data);
//         res.end(data);
//     });
// })

// Home page route.
// http://localhost:8081/wiki
router.get('/', function (req, res) {
    res.send('Wiki home page');
})

// About page route.
http://localhost:8081/wiki/about
router.get("/about", function (req, res) {
    res.send('About this wiki');
})

router.get('/test', function (req, res) {
    res.send('Wiki test page');
})

module.exports = router;