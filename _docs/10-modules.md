# Node.js library

## Workspace (project) creation

`npm init -w ./projects/first-lib`
`npm init -w ./projects/second-lib`
`npm init -w ./projects/third-lib`

## Add main script

Add main script defined in the package.json file into workspace.
This should be `index.js` by default.

## Add code to the main script


## Local testing (REPL)

1.  Go to the folder where main script is located.
2.  Run node
3.  Import the module using require()
4.  Test exports

An example of the way to test would be as follows:

```cmd
DESKTOP-NJM00MP>zhixian D:\src\github\nodePoc\projects\first-lib (main)
PS> node
Welcome to Node.js v16.13.0.
Type ".help" for more information.
> x = require('./index.js')
{
  getRandomColor: [Function (anonymous)],
  allColors: [
    Color { name: 'brightred', code: '#E74C3C' },
    Color { name: 'soothingpurple', code: '#9B59B6' },
    Color { name: 'skyblue', code: '#5DADE2' },
    Color { name: 'leafygreen', code: '#48C9B0' },
    Color { name: 'sunkissedyellow', code: '#F4D03F' },
    Color { name: 'groovygray', code: '#D7DBDD' }
  ],
  printMsg: [Function (anonymous)]
}
> x.printMsg()
Message printed by first-lib printMsg function.
undefined
> .exit
DESKTOP-NJM00MP>zhixian D:\src\github\nodePoc\projects\first-lib (main)
PS> 
```

You can also test the module from root of the project.
The only difference is with the path to the module declared for require().
Here's an sample output.

```
DESKTOP-NJM00MP>zhixian D:\src\github\nodePoc (main)
PS> node
Welcome to Node.js v16.13.0.
Type ".help" for more information.
> x = require('./projects/first-lib/index.js')
{
  getRandomColor: [Function (anonymous)],
  allColors: [
    Color { name: 'brightred', code: '#E74C3C' },
    Color { name: 'soothingpurple', code: '#9B59B6' },
    Color { name: 'skyblue', code: '#5DADE2' },
    Color { name: 'leafygreen', code: '#48C9B0' },
    Color { name: 'sunkissedyellow', code: '#F4D03F' },
    Color { name: 'groovygray', code: '#D7DBDD' }
  ],
  printMsg: [Function (anonymous)]
}
> x.printMsg()
Message printed by first-lib printMsg function.
undefined
> .exit
DESKTOP-NJM00MP>zhixian D:\src\github\nodePoc (main)
PS>
```


## Test local module as a dependency in another Node.js project

### Referencing the local module

Method 1: Update target project `dependencies` section in `package.json` 

Update the `dependencies` section in target project's (travel-api) `package.json` 
and reference dependency project directory using `file:` directly like so:

```json
  "dependencies": {
    "first-lib": "file:../first-lib",
    "second-lib": "file:../second-lib",
    "jsonwebtoken": "^8.5.1",
    "sqlite3": "^5.0.2",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
```

This is probably the most clean method.
The only disadvantage is that this has to be hand-written manually.

Method 2: Add to `node_modules` folder and reference by version

1.  `npm link projects\second-lib`
2.  Update 'travel-app' package.json file's dependency section:

```json
  "dependencies": {
    "first-lib": "^1.0.0",
    "second-lib": "^1.0.0",
    "jsonwebtoken": "^8.5.1",
    "sqlite3": "^5.0.2",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
```

Remarks:
`npm link` creates a link to the dependency project in `node_modules` folder.
You would then reference the version of the dependency project using version number.


Method 3: Install library at root level

At the directory root, run:

1.  `npm install second-lib`

Remarks:
This adds `dependencies` section in the `package.json` file in root directory.

```json
  "dependencies": {
    "second-lib": "file:projects/second-lib"
  }
```

This makes the dependency project available for all workspaces under the root directory.
Since its available for all workspaces, we do not need to make any changes to 
target project's `package.json` file.

#### Bugs and other hearsay

A lot of material on the Internet suggests doing something like:

`npm install first-lib --save -w travel-api`

This is based on the premise that 'first-lib' was published to npmjs repository.

Without publishing to npmjs repository, 
another common mistake would be to install it using local file paths:

`npm install .\projects\second-lib -w travel-api`

This adds a line like the following to the `dependencies` section 
of the target project's `package.json` file.

`"second-lib": "file:projects/second-lib",`

This line is a bug!
The correct way to reference it is:

`"second-lib": "file:../second-lib",`

In addition, the following error message will be display:

```cmd:In E:\src\github.com\..\nodePoc (main)
PS> npm install .\projects\second-lib -w travel-api
npm ERR! Cannot set properties of null (setting 'dev')
```

#### Troubleshooting method 1

Sometimes, `npm install -w travel-api` may display the following error messages:

```cmd:Error message 1
npm ERR! Invalid Version:
```

--OR--

```cmd:Error message 2
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/second-lib - Not found
npm ERR! 404
npm ERR! 404  'second-lib@^1.0.0' is not in this registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.
```

In such cases, try:
1.  removing the dependencies from target project's `package.json`
2.  run `npm install -w travel-api`
3.  re-add the dependencies to target project's `package.json`
4.  run `npm install -w travel-api`


## Usage of libary in another project

Example of importing a library in another project and using it.

```js
var router = require('express').Router();
var secondLib = require('second-lib');

router.get('/secondLib', async function (req, res) {
    
    log.info("HTTP GET /second-lib");

    res.send(`Result [${secondLib.printHelloWorld()}]`);
})

module.exports = router;
```

## Publish to NPM (to be tested)

`npm login`
`npm publish`

# Reference

https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module
https://initialcommit.com/blog/nodejs-module
