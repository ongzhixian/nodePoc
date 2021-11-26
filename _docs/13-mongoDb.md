# MongoDb

## Connecting to MongoDb

### Npm modules

`npm install mongodb -w mg-test`

### Using mongosh

`mongosh "mongodb+srv://cluster0.p8q7e.mongodb.net/myFirstDatabase" --username dbadmin`

### Using node.js

```

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbadmin:<password>@cluster0.p8q7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

Replace <password> with the password for the dbadmin user. 
Replace myFirstDatabase with the name of the database that connections will use by default. 
Ensure any option params are URL encoded.


### Using Compass

`mongodb+srv://dbadmin:<password>@cluster0.p8q7e.mongodb.net/test`