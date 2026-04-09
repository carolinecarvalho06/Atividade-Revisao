class DataCache {
    constructor() {
        if (DataCache.instance) return DataCache.instance;
        this.storage = new Map();
        DataCache.instance = this;
    }

    static getInstance() {
        if (!this.instance) this.instance = new DataCache();
        return this.instance;
    }

    set(key, value) { this.storage.set(key, value); }
    get(key) { return this.storage.get(key); }
}

const cache = DataCache.getInstance();
cache.set("user_10", { name: "Alice" });