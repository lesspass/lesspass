export default class Password {
    constructor(password) {
        this.password = password;
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
}
