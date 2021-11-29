var mg = require('./MongoDbService');

class UserService {

    constructor() {
        this.db = mg.safeTravel;
    }

    async registerUser(username, password) {
        this.db.insert("user", {
            "username": username,
            "password": password,
            "status": 0
        });
    }

    async GetUser(username) {
        return await this.db.fetchOne('user', { username: username }, {
            sort: { username: 1 },
            projection: { _id: 0, username: 1, password: 1, status: 1 }
        });
    }

    async UpdateUser(username, password) {
        return await this.db.updateOne(
            'user',
            { username: username },
            {
                $set: {
                    password: password
                }
            });
    }

    async DeleteUser(username) {
        return await this.db.updateOne(
            'user',
            { username: username },
            {
                $set: {
                    status: 9
                }
            });
    }

    async PurgeUser(username) {
        return await this.db.deleteOne(
            'user',
            { username: username }
            );
    }


    // async mgGetCountries(startWith) {

    //     return await this.mgdb.fetchAll('country', { name: new RegExp(`^${startWith}`, "i") }, {
    //         sort: { name: 1},
    //         projection: { _id: 0, name: 1, code: 1 }
    //     });

    //     // return await this.db.fetchAll(
    //     //     `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
    //     //     , [`${startWith}%`]
    //     // );
    //     // { name: /^si/i }
    // }

    // async getCountries(startWith) {
    //     return await this.db.fetchAll(
    //         `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
    //         , [`${startWith}%`]
    //     );
    // }

    // async getCountry(startWith) {
    //     return await this.db.fetchOne(
    //         `SELECT id, country_name FROM country WHERE country_name LIKE ? ORDER BY country_name;`
    //         , [`${startWith}%`]
    //     );
    // }

}


module.exports = new UserService();
