var fs = require('fs');
var path = require('path');
const { exit } = require('process');

class AppConfigurationService {

    constructor(filePath="./settings.json") {
        // fs.loadFile(filePath)

        let absPath = path.resolve(filePath);

        if (!fs.existsSync(absPath)) {
            throw new Error("File not found: " + absPath);
        }

        try {
            this.settings = JSON.parse(fs.readFileSync(absPath));
        }
        catch (e) {
            console.error(`Error loading ${filePath}; ${e}`);
            exit(1);
        }
    }
    
}

const svc = new AppConfigurationService();


module.exports = svc.settings;
