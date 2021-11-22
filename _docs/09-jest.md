# Notes on testing with Jest

## Install Jest

`npm install --save-dev jest --workspace=travel-api`

## Setup test script in `package.json`

Change the default test script from:

`"test": "echo \"Error: no test specified\" && exit 1",`

to:

`"test": "jest"`

Configure the `package.json` to include a 'jest' section:

```js:package.json
 "scripts": {
    "test": "jest"
  },
  "jest": {
    "collectCoverage": true,
    "coverageReporters": ["html"]
  },
```

`collectCoverage`   -- always check test coverage
`coverageReporters` -- generate html report (in a folder called 'coverage' (default; configurable))

See: https://jestjs.io/docs/configuration

## Run tests

Run tests in specific workspace:

`npm test --workspace=travel-api`
--OR--
`npm run test --workspace=travel-api`

Display test coverage:

`npm test --workspace=travel-api -- --coverage`

The extra double-dash in `-- --coverage` is not a typological error.
Its telling npm to pass the rest of the arguments (`--coverage` in this case) 
to the `jest` command in the test script.
So the test script as if:

`jest --coverage`


## Tests

