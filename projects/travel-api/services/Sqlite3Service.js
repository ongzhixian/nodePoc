var sqlite3 = require('sqlite3');

class Sqlite3Service {

    constructor(filepath="./data/travel.sqlite3") {
        this.db = new sqlite3.Database(filepath, (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database');
                // this.init();
            }
        });
    }

    fetchAll(sql, params) {
        return new Promise((resolve, reject) => 
            this.db.all(sql, params, 
                (err, rows) => err ? reject(err) : resolve(rows)
        ));
    }

    fetchOne(sql, params) {
        return new Promise((resolve, reject) => 
            this.db.get(sql, params, 
                (err, rows) => err ? reject(err) : resolve(rows)
        ));
    }

    execute(sql, params) {
        return new Promise((resolve, reject) => 
            this.db.run(sql, params, 
                (err) => err ? reject(err) : resolve()
        ));
    }
}

// Export class type
// module.exports = Sqlite3Service;

// Export class type and instance
// module.exports = {
//     Sqlite3Service: Sqlite3Service,
//     instance: new Sqlite3Service()
// };

// Export instance
module.exports = new Sqlite3Service("./data/travel.sqlite3");