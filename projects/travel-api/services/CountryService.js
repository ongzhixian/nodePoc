var Sqlite3Service = require('./Sqlite3Service');
// var {Sqlite3Service, inst} = require('./Sqlite3Service');

class CountryService {

    constructor() {
        this.db = Sqlite3Service;
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
