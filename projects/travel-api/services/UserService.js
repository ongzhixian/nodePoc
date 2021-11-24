var Sqlite3Service = require('./Sqlite3Service');
// var {Sqlite3Service, inst} = require('./Sqlite3Service');

class UserService {

    constructor() {
        this.db = Sqlite3Service;
    }

    async addUser(username, password) {
        return await this.db.execute(
            `INSERT INTO app_user (username, password) VALUES (?, ?);`
            , [username, password]
        );
    }

    async updateUser(username, password) {
        return await this.db.execute(
            `UPDATE app_user SET password = ? WHERE username = ?;`
            , [password, username]
        );
    }

    
    async deleteUser(username, password) {
        return await this.db.execute(
            `DELETE FROM app_user WHERE username = ?;`
            , [username]
        );
    }
}


module.exports = new UserService();
