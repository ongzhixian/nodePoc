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

        try {
            
            const client = new MongoClient(this.mongoDbUri);

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

} // class MongoDbService


module.exports = {
    "safeTravel": new MongoDbService('safe_travel', filePath = "./secrets.json"),
    "safeTravel2": new MongoDbService('safe_travel', filePath = "./secrets.json")
};
