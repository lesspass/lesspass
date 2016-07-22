import Storage from './storage';

module.exports = storage => {
    const lesspassStorage = Storage(storage);
    return {
        get(){
            const defaultData = {
                defaultOptions: {
                    counter: 1,
                    password: {
                        length: 12,
                        settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
                    }
                },
                savePasswordsInfo: false,
                passwordsInfo: {},
            };
            return lesspassStorage.get('lesspass').then(data => {
                return Object.assign(defaultData, data);
            });
        },
        set(data){
            return lesspassStorage.set({lesspass: data});
        },
        setPasswordInfo(passwordInfo){
            return this.get().then(data => {
                const uid = `${passwordInfo.login}:${passwordInfo.site}`;
                delete passwordInfo['masterPassword'];
                data.passwordsInfo[uid] = passwordInfo;
                return this.set(data);
            });
        }
    };
};
