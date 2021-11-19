var sqlite3 = require('sqlite3');

class Sqlite3Service {

    constructor() {
        this.db = new sqlite3.Database("./data/travel.sqlite3", (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database');
                this.init();
            }
        });
    }

    init() {
        this.db.run(`
        CREATE TABLE IF NOT EXISTS "country" (
            "id"	INTEGER,
            "country_name"	TEXT,
            "country_iso"	TEXT,
            "lane_name"	TEXT,
            PRIMARY KEY("id" AUTOINCREMENT)
        );
        `);

        // this.db.run(`INSERT INTO "country" (id, country_name, country_iso, lane_name) VALUES (?, ?, ?, ?);`, [12, 'Singapore', 'SG', 'STL-Cat4']);
        // this.db.run(`insert into "country" (id, country_name, country_iso, lane_name) VALUES (23, 'Singapore', 'SG', '32');`);
        // this.db.run(`INSERT INTO "country" (country_name, country_iso, lane_name) VALUES (?, ?, ?);`, ['Singapore', 'SG', 'STL-Cat4']);

        // If insert many records, it maybe worth preparing the statement first.
        // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        // for (var i = 0; i < 10; i++) {
        //     stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();


        // console.log('Table created');
    }

    run(sql, params) {
        return this.db.run(sql, params);
    }

    fetchAll(sql, params) {
        // this.db.all(`SELECT * FROM country;`, undefined, (err, rows) => {
        //     if (err) {
        //         console.log(`fetchAll error: ${err}`);
        //     } else {
        //         console.log(`fetchAll rows: ${rows}`);
        //         return rows;
        //     }
        // });

        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows)
                }
            })
        });
    }

}


module.exports = new Sqlite3Service();