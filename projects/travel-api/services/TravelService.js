var Sqlite3Service = require('./Sqlite3Service');

class TravelService {

    constructor() {
        this.db = Sqlite3Service;
    }

    findCountries(query) {
        console.log("in find countries" + query);

        // let a = this.db.run(`SELECT * FROM country WHERE country_name LIKE ?`, ['Sin']);
        let a = this.db.fetchAll(`SELECT * FROM country WHERE country_name LIKE ?`, ['Sin%']);

        console.log(`a is ${a}`);
        // console.log(b);
        a.then((value) => {
            console.log(`value is ${value}`);
        });


        // return new Promise((resolve, reject) => {
        //     this.db.findCountries(query).then((data) => {
        //         resolve(data);
        //     }).catch((err) => {
        //         reject(err);
        //     });
        // });
    }
}


module.exports = new TravelService();