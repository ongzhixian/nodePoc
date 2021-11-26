var Sqlite3Service = require('./Sqlite3Service');
var mg = require('./MongoDbService');
// var {Sqlite3Service, inst} = require('./Sqlite3Service');

class CountryService {

    constructor() {
        this.db = Sqlite3Service;
        this.mgdb = mg.safeTravel;
    }

    async mgGetCountries(startWith) {

        return await this.mgdb.fetchAll('country', { name: new RegExp(`^${startWith}`, "i") }, {
            sort: { name: 1},
            projection: { _id: 0, name: 1, code: 1 }
        });

        // return await this.db.fetchAll(
        //     `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
        //     , [`${startWith}%`]
        // );
        // { name: /^si/i }
    }

    async mgGetCountry(startWith) {

        return await this.mgdb.fetchOne('country', { name: new RegExp(`^${startWith}`, "i") }, {
            sort: { name: 1},
            projection: { _id: 0, name: 1, code: 1 }
        });

        // return await this.db.fetchAll(
        //     `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
        //     , [`${startWith}%`]
        // );
        // 
    }

    async getCountries(startWith) {
        return await this.db.fetchAll(
            `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
            , [`${startWith}%`]
        );
    }

    async getCountry(startWith) {
        return await this.db.fetchOne(
            `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
            , [`${startWith}%`]
        );
    }

}


module.exports = new CountryService();
