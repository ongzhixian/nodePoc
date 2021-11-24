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


## Local test module as a dependency in another Node.js project

There seems to be a bug with using `npm install` with workspaces for local projects (see section 'Bug?! Do not work' below).

The current correct combination seems to be:

`npm install -w first-lib`
`npm install --save ./projects/first-lib -w travel-api`

The first command creates a link to the 'nodes_module' folder in the project root.
The second command writes the dependency to the 'package.json' file for the 'travel-api' project 
but comes with an misleading (alarming?!) error message.

So instead of the calling second command, you can just make changes to the 'package.json' file of the 'travel-api' project manually.
(because that's part of what the second command is suppose to do).

In the package.json file of the travel-api project add the reference to 'second-lib' with version as follows:

```json
  "dependencies": {
    "second-lib": "^1.0.0",
    "jsonwebtoken": "^8.5.1",
    "sqlite3": "^5.0.2",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
```

--OR-- just reference the 'first-lib' as file reference without version, like so:

```json
  "dependencies": {
    "first-lib": "file:projects/first-lib",
    "jsonwebtoken": "^8.5.1",
    "second-lib": "file:projects/second-lib",
    "sqlite3": "^5.0.2",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
```

Aside: While either of the above works, the second npm command mentioned above will actually write:
```json
"first-lib": "file:projects/first-lib",
```

### Bug?! Do not work

Blogs elsewhere seems to suggest that the second command:

`npm install --save ./projects/first-lib -w travel-api`

would be sufficient (presumably, it will create the link in 'node_modules' and update the dependencies section in package.json file).

But I find that when I just run the second command, the link to package folder is not created in 'node_modules' 
and I will get the following error as well:

```cmd:Not working!
DESKTOP-NJM00MP>zhixian D:\src\github\nodePoc (main)
PS> npm install .\projects\first-lib\ -w travel-api
npm ERR! Cannot set properties of null (setting 'dev')

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\zhixian\AppData\Local\npm-cache\_logs\2021-11-24T01_45_08_518Z-debug.log
```

Currently any invoke of `npm install --save ./projects/first-lib -w travel-api` will display a message like the one above.
But it does update the 'dependencies' section in the 'package.json' file to be like so:

```json
  "dependencies": {
    "first-lib": "file:projects/first-lib",
    "jsonwebtoken": "^8.5.1",
    "second-lib": "file:projects/second-lib",
    "sqlite3": "^5.0.2",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
```

The problem seems to have to do with `-w travel-api` option.

It seems to be confusing npm and it create another node_modules folder in the travel-api project. 
(Instead of reusing the default node_modules folder in the root folder.)

The workaround seems to be downgrading to npm@7.18.1 
--OR--
Just do what I suggested above.

See: https://github.com/npm/cli/issues/3847
See: https://github.com/npm/cli/issues/3711


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