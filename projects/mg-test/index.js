var fs = require('fs');
var path = require('path');
const { exit } = require('process');

const { MongoClient } = require("mongodb");
const { Console } = require('console');


// Helper functions

function loadSettings(filePath = "./settings.secrets.json") {

    try {

        let absPath = path.resolve(filePath);

        if (!fs.existsSync(absPath))
            throw new Error("File not found: " + absPath);

        return JSON.parse(fs.readFileSync(absPath));
    }
    catch (e) {
        console.error(`Error loading ${filePath}; ${e}`);
        exit(1);
    }
}


async function run(client) {
    try {
        await client.connect();

        const database = client.db('sample_mflix');

        const movies = database.collection('movies');

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);

        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function test_insert_one(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const haiku = database.collection("country");

        // create a document to insert

        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }

        const result = await haiku.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function test_insert_many(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const foods = database.collection("foods");

        // create an array of documents to insert

        const docs = [

            { name: "cake", healthy: false },

            { name: "lettuce", healthy: true },

            { name: "donut", healthy: false }

        ];

        // this option prevents additional documents from being inserted if one fails

        const options = { ordered: true };

        const result = await foods.insertMany(docs, options);

        console.log(`${result.insertedCount} documents were inserted`);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function test_upsert_one(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // create a filter for a movie to update

        const filter = { title: "Random Harvest" };

        // this option instructs the method to create a document if no documents match the filter

        const options = { upsert: true };

        // create a document that sets the plot of the movie

        const updateDoc = {

            $set: {

                plot: `A harvest of random numbers, such as: ${Math.random()}`

            },

        };

        const result = await movies.updateOne(filter, updateDoc, options);

        console.log(

            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,

        );

    } finally {

        await client.close();
    }
}

async function test_update_many(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // create a filter to update all movies with a 'G' rating

        const filter = { rated: "G" };

        // increment every document matching the filter with 2 more comments

        const updateDoc = {

            $set: {

                random_review: `After viewing I am ${100 * Math.random()

                    }% more satisfied with life.`,

            },

        };

        const result = await movies.updateMany(filter, updateDoc);

        console.log(`Updated ${result.modifiedCount} documents`);

    } finally {

        await client.close();
    }
}

async function test_replace_one(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // create a query for a movie to update

        const query = { title: { $regex: "The Cat from" } };

        // create a new document that will be used to replace the existing document

        const replacement = {

            title: `The Cat from Sector ${Math.floor(Math.random() * 1000) + 1}`,

        };

        const result = await movies.replaceOne(query, replacement);

        console.log(`Modified ${result.modifiedCount} document(s)`);

    } finally {

        await client.close();
    }
}

async function test_delete_one(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // Query for a movie that has title "Annie Hall"

        const query = { title: "Annie Hall" };

        const result = await movies.deleteOne(query);

        if (result.deletedCount === 1) {

            console.log("Successfully deleted one document.");

        } else {

            console.log("No documents matched the query. Deleted 0 documents.");

        }

    } finally {

        await client.close();
    }
}

async function test_delete_many(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // Query for all movies with a title containing the string "Santa"

        const query = { title: { $regex: "Santa" } };

        const result = await movies.deleteMany(query);

        console.log("Deleted " + result.deletedCount + " documents");

    } finally {

        await client.close();
    }
}

async function test_count(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // Estimate the total number of documents in the collection
        // and print out the count.

        const estimate = await movies.estimatedDocumentCount();

        console.log(`Estimated number of documents in the movies collection: ${estimate}`);

        // Query for movies from Canada.

        const query = { countries: "Canada" };

        // Find the number of documents that match the specified
        // query, (i.e. with "Canada" as a value in the "countries" field)
        // and print out the count.

        const countCanada = await movies.countDocuments(query);

        console.log(`Number of movies from Canada: ${countCanada}`);

    } finally {

        await client.close();
    }
}

async function test_distinct(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const movies = database.collection("movies");

        // specify the document field

        const fieldName = "year";

        // specify an optional query document

        const query = { directors: "Barbra Streisand" };

        const distinctValues = await movies.distinct(fieldName, query);

        console.log(distinctValues);

    } finally {

        await client.close();
    }
}

async function test_bulk_write(client) {
    try {
        await client.connect();

        const database = client.db('safe_travel');

        const theaters = database.collection("theaters");

        const result = await theaters.bulkWrite([
            {
                insertOne: {
                    document: {
                        location: {
                            address: {
                                street1: "3 Main St.",
                                city: "Anchorage",
                                state: "AK",
                                zipcode: "99501",
                            },
                        },
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        location: {
                            address: {
                                street1: "75 Penn Plaza",
                                city: "New York",
                                state: "NY",
                                zipcode: "10001",
                            },
                        },
                    },
                },
            },
            {
                updateMany: {
                    filter: { "location.address.zipcode": "44011" },
                    update: { $set: { is_in_ohio: true } },
                    upsert: true,
                },
            },
            {
                deleteOne: { filter: { "location.address.street1": "221b Baker St" } },
            },
        ]);

        console.log(result);

    } finally {

        await client.close();
    }
}

// Main script

if (require.main === module) {

    this.settings = loadSettings();

    console.info("Settings loaded.")

    const db_uri = this.settings['mongodb']['safeTravel'];

    const client = new MongoClient(db_uri);

    // run(client).catch(console.dir);

    // test_insert_one(client).catch(console.dir);
    // test_insert_many(client).catch(console.dir);
    // test_upsert_one(client).catch(console.dir);
    // test_update_many(client).catch(console.dir);
    // test_replace_one(client).catch(console.dir);
    // test_delete_one(client).catch(console.dir);
    // test_delete_many(client).catch(console.dir);
    // test_count(client).catch(console.dir);
    // test_distinct(client).catch(console.dir);
    // Skip example for command
    // Skip example for watching of changes
    test_bulk_write(client).catch(console.dir);

}

// See: https://docs.mongodb.com/drivers/node/current/usage-examples/