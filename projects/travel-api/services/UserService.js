// var fs = require('fs');
// var util = require('util');
var crypto = require('crypto');
var buffer = require('buffer');
const jwt = require('jsonwebtoken');

class UserService {

    constructor() {}

}

const svc = new UserService();

if (require.main === module) {
    
    // console.log(module);     // module  -- info about current module
    // console.log(require);    // require -- info about Node.js ecosystem

    // Encrypt

    let random32Bytes = crypto.randomBytes(32);

    // console.log(`[HEX]:${random32Bytes.toString("hex")}`)

    // console.log(`[B64]:${Buffer.from(random32Bytes).toString('base64')}`)

    // Decrypt

    let b64Bytes = 'OcaNtrP+QMBbIe8czpmT8LhIYzFi5qxbo6Iy1OVpX9Y=';

    let rndBytes = Buffer.from(b64Bytes, 'base64');

    let TOKEN_SECRET = rndBytes.toString("hex");

    console.log(`[HEX]:${rndBytes.toString("hex")}`)

    // Generate JWT
    
    let token = jwt.sign({ foo: 'ongzhixian' }, TOKEN_SECRET);
    
    console.log(token);

    // Verify JWT

    let tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJvbmd6aGl4aWFuIiwiaWF0IjoxNjM3NTAwMjQzfQ.QaGwuqI4uyLijyRNSvf-A14Q3E8x4M1012c7-Y5ns8k';

    jwt.verify(tok, TOKEN_SECRET, (err, user) => {

        console.log(err)
    
        if (err) 
            console.error(err);
            // return res.sendStatus(403)
    
        req.user = user
    
        next()

    });

    const svc = new UserService();

    // Convert to base64
    // console.log(Buffer.from("Hello World").toString('base64'));
    // Convert from base64
    // console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('utf8'));
    
}

module.exports = svc;
