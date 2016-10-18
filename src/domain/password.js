export default class Password {
    constructor(password) {
        this.password = password;
        this.options = {
            uppercase: password.uppercase,
            lowercase: password.lowercase,
            numbers: password.numbers,
            symbols: password.symbols,
            length: password.length,
            counter: password.counter,
        }
    }

    isNewPassword(passwords) {
        let isNew = true;
        passwords.forEach(pwd => {
            if (pwd.site === this.password.site && pwd.login === this.password.login) {
                isNew = false;
            }
        });
        return isNew;
    }

    json() {
        return this.password
    }
}
