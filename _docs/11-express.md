# Express middleware

## Parsing request bodies

The Express 4.16+ JSON request body parsing middleware requires `Content-Type: application/json` header.

With `application/json` content-type header, body is parsed as JSON object.:

```js
{ password: 'testpassw0rd', username: 'testuser' }
```

Without 'application/json' content-type header, it will default to 'application/x-www-form-urlencoded' 
(if its middleware is in used); 
The resulting object is an horrific/awkward:

```js
{ '{"password":"testpassw0rd","username":"testuser"}': '' }
```

If no 'application/json' and 'application/x-www-form-urlencoded' content-type header, body is empty object 

```js
{  }
```

If body is malformed, it will return HTTP 400 Bad Request.
See: https://masteringjs.io/tutorials/express/body


See: https://github.com/expressjs/body-parser