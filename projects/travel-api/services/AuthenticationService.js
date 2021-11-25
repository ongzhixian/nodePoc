var Sqlite3Service = require('./Sqlite3Service');

class AuthenticationService {

    constructor() {
        this.db = Sqlite3Service;
    }

    async authenticateUser(username, password) {

        let app_user = await this.db.fetchOne(
            `SELECT id, username, password FROM app_user WHERE username = ?;`,
            [username]
        );

        if (app_user && app_user.password === password) {
            return true;
        }

        return false;
    }

    // async getUsers() {
    //     return await this.db.fetchOne(
    //         `SELECT id, username, password FROM app_user WHERE username = ?;`,
    //         ['admin']
    //     );
    // }
}


module.exports = new AuthenticationService();
