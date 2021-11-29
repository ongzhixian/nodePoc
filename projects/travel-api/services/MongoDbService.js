var fs = require('fs');
var path = require('path');
const { MongoClient } = require("mongodb");

class MongoDbService {

    constructor(dbName = 'safe_trave', filePath = "./secrets.json") {
        try {
            let settings = this.loadSettings(filePath);
            this.mongoDbUri = settings['mongoDb']['safeTravel'];
        } catch (error) {
            throw error;
        }
    }

    loadSettings(filePath = "./secrets.json") {
        try {

            let absPath = path.resolve(filePath);

            if (!fs.existsSync(absPath))
                throw new Error("File not found: " + absPath);

            return JSON.parse(fs.readFileSync(absPath));
        }
        catch (e) {
            console.error(`Error loading ${filePath}; ${e}`);
            throw e;
        }
    }

    // Can't tell which implementation is stupider; 
    // going with this for now

    async insert(collectionName, document) {

        const client = new MongoClient(this.mongoDbUri);

        try {

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            const result = await collection.insertOne(document);

            console.log(`A document was inserted with the _id: ${result.insertedId}`);

            return result;

        } finally {

            await client.close();

        }
    }

    async insertMany(collectionName, documents) {

        try {
            const client = new MongoClient(this.mongoDbUri);

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            const options = { ordered: true };

            const result = await collection.insertMany(documents, options);

            console.log(`${result.insertedCount} documents were inserted`);

            return result;

        } finally {
            await client.close();
        }
    }

    async fetchAll(collectionName, query={}, options={}) {

        const client = new MongoClient(this.mongoDbUri);

        try {
            let result = [];

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            // const query = { runtime: { $lt: 15 } };
            // db.users.find({name: /a/})   // sql equiv: '%a%'  -- contains
            // db.users.find({name: /^pa/}) // sql equiv: 'pa%'  -- starts with
            // db.users.find({name: /ro$/}) // sql equiv: '%ro'  -- ends with

            // const options = {
            //     // sort returned documents in ascending order by title (A->Z)
            //     sort: { title: 1 },

            //     // Include only the `title` and `imdb` fields in each returned document
            //     projection: { _id: 0, title: 1, imdb: 1 },
            // };

            const cursor = collection.find(query, options);

            if ((await cursor.count()) === 0) {
                return result; // console.log("No documents found!");
            }

            await cursor.forEach((doc) => result.push(doc));

            return result;

        } finally {
            await client.close();
        }
    }

    async fetchOne(collectionName, query={}, options={}) {
        
        const client = new MongoClient(this.mongoDbUri);

        try {

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            return await collection.findOne(query, options);

        } finally {
            await client.close();
        }
    }

    async updateOne(collectionName, query={}, updates={}, options={}) {
        
        const client = new MongoClient(this.mongoDbUri);

        try {

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            return await collection.updateOne(query, updates, options);

        } finally {
            await client.close();
        }
    }

    async deleteOne(collectionName, query={}, options={}) {
        
        const client = new MongoClient(this.mongoDbUri);

        try {

            await client.connect();

            const database = client.db();

            const collection = database.collection(collectionName);

            return await collection.deleteOne(query, options);

        } finally {
            await client.close();
        }
    }

} // class MongoDbService


module.exports = {
    "safeTravel": new MongoDbService('safe_travel', filePath = "./secrets.json"),
    "safeTravel2": new MongoDbService('safe_travel', filePath = "./secrets.json")
};
