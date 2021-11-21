var fs = require('fs');
var util = require('util');

class LogService {

    constructor(filepath = "./logs/app.log", logToConsole=false) {

        Object.defineProperty(this, 'FILEPATH', {
            value: filepath,
            writable: false
        });

        Object.defineProperty(this, 'CONSOLE_LOG', {
            value: logToConsole,
            writable: false
        });
    }

    timestamp(timeOnly=true) {
        if (timeOnly)
            return (new Date()).toISOString().split('T')[1].split('.')[0];
            // return (new Date()).toISOString().split('T')[1];

        return (new Date()).toISOString();
    }

    log(message) {
        fs.appendFile(this.FILEPATH, 
            `${message}\n`,
            (err) => err ? console.error(err) : {});
    }

    trace(message, ...params) {
        const msg = `${this.timestamp()} [TRC] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.trace(msg) : {};
    }

    debug(message, ...params) {
        const msg = `${this.timestamp()} [DBG] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.debug(msg) : {};
    }

    info(message, ...params) {
        const msg = `${this.timestamp()} [INF] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.info(msg) : {};
    }

    warn(message, ...params) {
        const msg = `${this.timestamp()} [WRN] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.warn(msg) : {};
    }

    error(message, ...params) {
        const msg = `${this.timestamp()} [ERR] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.error(msg) : {};
    }

    fatal(message, ...params) {
        const msg = `${this.timestamp()} [FTL] ${util.format(message, ...params)}`;
        this.log(msg);
        this.CONSOLE_LOG ? console.error(msg) : {};
    }
}

const log = new LogService("./logs/travel-api.log");

if (require.main === module) {
    
    // console.log(module);     // module  -- info about current module
    // console.log(require);    // require -- info about Node.js ecosystem

    const log = new LogService("../logs/travel-api.log", true);

    // Various log levels

    log.trace("Level 0 - TRACE (TRC) message"); // Verbose
    log.debug("Level 1 - DEBUG (DBG) message");
    log.info( "Level 2 - INFO  (INF) message");
    log.warn( "Level 3 - WARN  (WRN) message");
    log.error("Level 4 - ERROR (ERR) message");
    log.fatal("Level 5 - FATAL (FTL) message"); // console.fatal does not exists
}

module.exports = log;
