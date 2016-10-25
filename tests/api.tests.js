import test from 'ava';
import lesspass from '../index';

test('should use pbkdf2 with 8192 iterations and sha256', t=> {
    lesspass.encryptLogin('test@example.org', 'password').then(function (encryptedLogin) {
        t.is('d8af5f918db6b65b1db3d3984e5a400e39e1dbb19462220e4431de283809f472', encryptedLogin);
    });
});

test('should allow utf8 parameter', t=> {
    lesspass.encryptLogin('test@example.org', '♥ LessPass ♥').then(function (encryptedLogin) {
        t.is('997fe81d3d0db236e039c75efdb487f17a902fdf94f9dacaa9884329c85d9651', encryptedLogin);
    });
});
test('auto generated encrypt login tests', t => {
    var promises = [];
    var passwords = [
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password',
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
        },
        {
            login: 'lesspass',
            masterPassword: 'password',
            encryptedLogin: '7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116',
        },
        {
            login: 'contact@lesspass.com',
            masterPassword: 'password2',
            encryptedLogin: 'ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4',
        }
    ];

    for (var entry of passwords) {
        promises.push(lesspass.encryptLogin(entry.login, entry.masterPassword));
    }

    return Promise.all(promises).then(values => {
        for (let i = 0; i < values.length; i++) {
            t.is(passwords[i].encryptedLogin, values[i]);
        }
    });
});
test('render password', t => {
    var site = 'lesspass.com';
    var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
    var passwordOptions = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    };
    lesspass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
        t.is('azYS7,olOL2]', generatedPassword);
    })
});
test('auto generated render password tests', t => {
    var promises = [];
    var passwords = [
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'azYS7,olOL2]'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 14,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'azYS7,olOL2]iz'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: false,
            numbers: false,
            symbols: false,
            generatedPassword: 'azyseqololat'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: false,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'AZ3[EQ7@OL2]'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: false,
            uppercase: false,
            numbers: true,
            symbols: true,
            generatedPassword: '4?3[7,7@7@2]'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: false,
            uppercase: false,
            numbers: false,
            symbols: true,
            generatedPassword: '[?=[&,:@:@[]'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: false,
            generatedPassword: 'azYS7uwAW8at'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: false,
            symbols: false,
            generatedPassword: 'azYSeqOLolAT'
        },
        {
            encryptedLogin: '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0',
            site: 'lesspass.com',
            counter: 2,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'obYT2=olOV9='
        },
        {
            encryptedLogin: '7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'erOC1%imIW3,'
        },
        {
            encryptedLogin: 'ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4',
            site: 'lesspass.com',
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
            generatedPassword: 'uvUM5_ucUP5='
        }
    ];

    for (var entry of passwords) {
        var passwordOption = {
            counter: entry.counter,
            length: entry.length,
            lowercase: entry.lowercase,
            uppercase: entry.uppercase,
            numbers: entry.numbers,
            symbols: entry.symbols,
        };
        promises.push(lesspass.renderPassword(entry.encryptedLogin, entry.site, passwordOption));
    }

    return Promise.all(promises).then(values => {
        for (let i = 0; i < values.length; i++) {
            t.is(passwords[i].generatedPassword, values[i]);
        }
    });
});

