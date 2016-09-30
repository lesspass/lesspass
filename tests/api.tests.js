import test from 'ava';
import lesspass from '../src/lesspass';

test('encrypt login', t => {
    return lesspass.encryptLogin('test@example.org', 'password').then(encryptedLogin => {
        t.is('d8af5f918db6b65b1db3d3984e5a400e39e1dbb19462220e4431de283809f472', encryptedLogin);
    })
});

test('encrypt login with utf8 parameter', t => {
    return lesspass.encryptLogin('test@example.org', '♥ LessPass ♥').then(encryptedLogin => {
        t.is('063092c809334979f505df88ed37845d298c01f7e8a03cbd661edbc084c650ca', encryptedLogin);
    })
});

test('render password', t => {
    const site = 'lesspass.com';
    const encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
    const passwordOptions = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    };
    t.is('azYS7,olOL2]', lesspass.deriveEncryptedLogin(encryptedLogin, site, passwordOptions));
});


test('auto generated encrypt login tests', t => {
    const promises = [];
    const passwords = [
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

    for (const entry of passwords) {
        promises.push(lesspass.encryptLogin(entry.login, entry.masterPassword));
    }

    t.plan(passwords.length);
    return Promise.all(promises).then(values => {
        for (let i = 0; i < values.length; i++) {
            t.is(passwords[i].encryptedLogin, values[i]);
        }
    });
});

test('auto generated derive encrypted login tests', t => {
    const passwords = [
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


    t.plan(passwords.length);
    for (let i = 0; i < passwords.length; i++) {
        let password = passwords[i];
        let passwordOption = {
            counter: password.counter,
            length: password.length,
            lowercase: password.lowercase,
            uppercase: password.uppercase,
            numbers: password.numbers,
            symbols: password.symbols,
        };
        t.is(password.generatedPassword, lesspass.deriveEncryptedLogin(password.encryptedLogin, password.site, passwordOption));
    }
});
