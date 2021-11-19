# OpenApi / Swagger

## Install 

`npm install swagger-ui-express -w travel-api`
`npm install swagger-jsdoc -w travel-api`

swagger-ui-express
    Provide the swagger UI.

swagger-jsdoc
    Discover and document your APIs.
    This "documentation" is then consumed by swagger-UI (in-lieu of `swagger.json` file).


## Examples

Place @swagger or @openapi on top of YAML-formatted specification parts:

```Swagger example
/**
 * @swagger
 *
 * /login:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 */
app.post('/login', (req, res) => {
  // Your implementation comes here ...
});
```

swaggerJsDoc comments seems to require `/**` and `*` to identify the document.
This makes it kind of annoying to use.
It might be easier (and more reusable; to implement elsewhere) to write a 'swagger.json' specification document.
This is not to say writing the 'swagger.json' specification document is easy to organize; just pros-&-cons.

```swaggerJsDocs structure
/**
 * @swagger
 *
 * ...your stuff...
 *
 */
```

## Reference

See: https://github.com/scottie1984/swagger-ui-express
See: https://www.npmjs.com/package/swagger-jsdoc
See: https://github.com/Surnet/swagger-jsdoc/tree/v7/docs