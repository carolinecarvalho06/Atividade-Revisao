class Logger {
    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }

    static getInstance() {
        return new Logger(); // O constructor garante a instância única
    }

    log(message) {
        const entry = `[${new Date().toISOString()}] ${message}`;
        this.logs.push(entry);
        console.log("Gravando log: " + entry);
    }
}

const logger = Logger.getInstance();
logger.log("Sistema iniciado.");