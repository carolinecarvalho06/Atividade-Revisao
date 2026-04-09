class LicenseChecker {
    constructor() {
        if (LicenseChecker.instance) return LicenseChecker.instance;
        this.isValidated = false;
        LicenseChecker.instance = this;
    }

    static getInstance() {
        if (!this.instance) this.instance = new LicenseChecker();
        return this.instance;
    }

    verify(key) {
        this.isValidated = (key === "ABC-123");
        return this.isValidated;
    }
}

const checker = LicenseChecker.getInstance();
console.log("Licença válida?", checker.verify("ABC-123"));