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
    res.send('user  home page');
})


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