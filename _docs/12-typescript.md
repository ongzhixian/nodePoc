# Typescript

## Installation npm packages

`npm install --save-dev typescript -w tsone`        # Install typescript to project (bare minimal; the rest are nice-to-haves)
`npm install --save-dev tslib -w tsone`             # Install tslib to project (for type-safe library); 
                                                    # Use in conjunction with `"importHelpers": true,` in `tsconfig.json`
`npm install --save-dev tslint -w tsone`
`npm install --save-dev @types/node  -w tsone`

`npm install express -w tsone`
`npm install --save-dev @types/express -w tsone`

`npm install --save-dev ts-node -w tsone`
`npm install --save-dev ts-node-dev -w tsone`       # Watch-reload typescript (nodemon alternative)

## Remarks

The `typescript` (and its other related) packages should be added as dev-dependency 
because there is no such thing as a TypeScript runtime!

TypeScript is a transpiler to JavaScript which is what Node understands and execute.

Having said, there is a `ts-node` package that is a wraps around `tsc && node dist/index.js`

Which means instead of specifying the following in package.json file:

`"start": "tsc && node dist/index.js"`

You specify:

`"start": "ts-node ./src/index.ts"`

See: https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/

Aside: 
    This maybe not so ideal, because you might not always want to re-compile 
    if you just want to re-run the code. So your milage using this method may vary.

## Add scripts to package.json

```json:package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "init": "tsc --init",
    "compile": "tsc",
    "start": "node index.js"
  },
```

## Initialize TypeScript for project

`npm run init -w tsone`

## Compile TypeScript

`npm run compile -w tsone`

## Run TypeScript

`npm run start -w tsone`
--OR--
`npm start -w tsone`

## tsconfig.json

Some literature advises setting a separate directories using `outDir` and `rootDir`.
If these are not set, the compiler will use the `./` directory src and output directory.

Here's an example that sets source to be `./src` and output to be `./dist`:

```json:tsconfig.json
{
  "compilerOptions": {                        
    "target": "es6",                               
    "module": "commonjs",                           
    "outDir": "./dist",                             
    "rootDir": "./src",                             
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "importHelpers": true,
  },
  "exclude":[
    "./node_modules"
  ]
}
```

# Reference

https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/
https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
https://nodejs.dev/learn/nodejs-with-typescript
