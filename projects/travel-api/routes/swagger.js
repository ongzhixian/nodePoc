var router = require('express').Router();

const swaggerUi = require('swagger-ui-express');

// Use this block if we are using a 'swagger.json' specification file.

// const swaggerDocument = require('../swagger.json');

// router.use('/', swaggerUi.serve);

// router.get('/', swaggerUi.setup(swaggerDocument));

// Use this block if we are using swaggerJSDoc to generate a specification file.

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Travel-API',
        version: '1.0.0',
      },
    },
    apis: [
        './routes/*.js'
    ], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Export router

module.exports = router;