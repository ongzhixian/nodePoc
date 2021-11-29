# npm CLI

Notes on npm CLI.

## Init

The root of the repository is initialize using:

`npm init`

## Add new workspace (project)

Create a workspace call 'tutorial-app' in a sub-folder call 'projects'.
Workspace create another 'package.json' file in the sub-folder.
One of the goals of using workspaces is to share the `node_modules` (dependencies) folders.
Otherwise, each project will have its own `node_modules` folder.

`npm init -w ./projects/tutorial-app`
`npm init -w ./projects/first-lib`

IMPORTANT! Do not use ANY upper case letters in the workspace name. For example:
`npm init -w ./projects/mgTest`
Using upper case letters will cause the npm to be unable to find the workspace. (use hypens instead `mg-test`)

```cmd
PS> npm install mongodb -w mgTest
npm ERR! No workspaces found:
npm ERR!   --workspace=mgTest
```

Note: 
    Initially, the example above specifies the workspace as `./projects/node-tutorial-app`.
    However, it was observed that during the creation of the `package.json` file, 
    `node-` in `./projects/node-tutorial-app` will get removed.
    So its effectively the same as specifying `./projects/tutorial-app`.

## Installing dependencies to workspace

Install `express` to 'tutorial-app' and 'first-app'.
Note: That `express` is only installed once into the `node_modules` folder. 

`npm install express -w tutorial-app`
`npm install express -w first-app`
`npm install swagger-ui-express -w travel-api`
`npm install swagger-jsdoc -w travel-api`
`npm install sqlite3 -w travel-api`
`npm install jsonwebtoken -w travel-api`
`npm install --save-dev jest --workspace=travel-api`
`npm install body-parser -w travel-api`
`npm install cors -w travel-api`

`npm install typescript -w tsone` # Install typescript to tsone (bare minimal; the rest are nice-to-haves)
`npm install tslint -w tsone`
`npm install express -w tsone`
`npm install @types/express -w tsone`

 

## Run app

To setup an workspace to be runnable, you need to add a "start" script 
in the 'package.json' file residing inside the workspace.

Under the 'scripts' section, add the following below 'test':

`"start": "node index.js"`

So the entire thing should look like:

```package.json
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  ...
```

To run the application in the workspace:

`npm start --workspace=first-app`
-- OR --
`npm run start -w first-app`


If you want to run the application from the root folder, 
amend the `package.json` file in the root folder such that it reads:

```package.json
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm start --workspace=first-app"
  },
  ...
```

That way, you can enter `npm start` in the root folder to run your application.

To run the application with NODE_ENV set to production: 

`npm start --workspace=travel-api --production`

Without the `--production` flag, NODE_ENV is undefined (and presumably run in non-production mode (whatever that means)).
This also means that if we want to always run in production mode, we should update the start script in `package.json` to:

`"start": "npm start --workspace=first-app --production"`

## Test

Setup in `package.json`:

  Comment out:

  `"test": "echo \"Error: no test specified\" && exit 1",`

  Replace with:

  `"test": "jest"`

Run test on specific workspace.

`npm run test --workspace=travel-api`
--OR--
`npm test --workspace=travel-api`

Display test coverage.

`npm test --workspace=travel-api -- --coverage`

Test the specified 2 workspaces.

`npm run test --workspace=first-app --workspace=tutorial-app`

Test all workspaces.

`npm run test --workspaces`

Test only if 'test' script is defined in 'package.json'.

`npm run test --workspaces --if-present`

