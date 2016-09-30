import test from 'ava';
import lesspass from '../src/lesspass2';

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
    t.is('azYS7,olOL2]', lesspass.renderPassword(site, encryptedLogin, passwordOptions));
});
