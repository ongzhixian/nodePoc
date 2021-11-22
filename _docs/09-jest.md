# Notes on testing with Jest

## Install Jest

`npm install --save-dev jest --workspace=travel-api`

## Setup test script in `package.json`

Change the default test script from:

`"test": "echo \"Error: no test specified\" && exit 1",`

to:

`"test": "jest"`


## Run tests

Run tests in specific workspace:

`npm test --workspace=travel-api`
--OR--
`npm run test --workspace=travel-api`

Display test coverage:

`npm test --workspace=travel-api -- --coverage`

## Tests

