# Workspaces (Projects)

Starting with npm CLI, there is the concept of workspaces (projects).

This means, we can have several projects in a single repository (mono-repo paradigm).

See: https://docs.npmjs.com/cli/v8/using-npm/workspaces

## Workspaces

1.  first-app
    Runs HTTP server that just respond with "Hello World!"
    
2.  tutorial-app
    A tutorial Node.js Express application
    See: https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
    See: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

3.  travel-api (server backend for ngLearn's travel-app)
    API Roadmap (9 APIs):
        - authentication.js    
        POST    /api/authenticate   # Authenticate user
        
        - user.js
        POST    /api/user           # Register new user
        PUT     /api/user           # Update existing user
        DELETE  /api/user           # Delete new user

        - country.js
        GET     /api/country        # Get all countries
        GET     /api/country/:id    # Get specific country info
        POST    /api/country        # Add new country info
        PUT     /api/country/:id    # Update country info
        DELETE  /api/country/:id    # Delete country info
        
    feature: 
        a rest api app, 
        swagger, 
        swagger-jsdoc,
        sqlite3

4.  <a SSE app>
5.  <a websocket app>
6.  one-minute-react (npm init -w ./projects/one-minute-react)
    3 apps:
        1.  index.html
            Basic React app without using JSX
        2.  index2.html
            Basic React app using JSX
        3.  index3.html
            Basic React app using JSX component in another file.
7.  <a cucumber app>
8.  <a rest app based on restify>
9.  first-lib
    An example of Node.js library
10. second-lib
    An alternate example of Node.js library