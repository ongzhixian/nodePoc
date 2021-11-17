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

## Test

Test the specified 2 workspaces.

`npm run test --workspace=first-app --workspace=tutorial-app`

Test all workspaces.

`npm run test --workspaces`

Test only if 'test' script is defined in 'package.json'.

`npm run test --workspaces --if-present`