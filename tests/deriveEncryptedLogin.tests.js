import test from 'ava';
import lesspass from '../index';

test('should createHmac', t => {
    var encryptedLogin = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
    var salt = 'lesspass.com1';
    return lesspass._createHmac(encryptedLogin, salt).then(hmac => {
        t.is('be00f942fc8aa67d8e76fc2456862b9d66d166ebfdd3dc2f0116e278209532ed', hmac);
    });
});
test('should derive encrypted login with default options', t => {
    const encryptedLogin = '90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d';
    const site = 'lesspass.com';
    const option = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
    };
    var p1 = lesspass._deriveEncryptedLogin(encryptedLogin, site);
    var p2 = lesspass._deriveEncryptedLogin(encryptedLogin, site, option);
    Promise.all([p1, p2]).then(generatedPasswords => {
        t.is(generatedPasswords[0], generatedPasswords[1])
    });
});
test('should derive encrypted login with defined length', t => {
    var encryptedLogin = 'd79d8482f708122288af7b259393a58fe05840f4555cc935cdd3f062b9aa75ed';
    var site = 'lesspass.com';
    var option = {
        counter: 1,
        length: 10,
    };
    return lesspass._deriveEncryptedLogin(encryptedLogin, site, option).then(function (generatedPassword) {
        t.is(10, generatedPassword.length);
    })
});
test('should return two different passwords if site different', t => {
    const encryptedLogin = 'f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9';
    const site = 'google.com';
    const site2 = 'facebook.com';
    var p1 = lesspass._deriveEncryptedLogin(encryptedLogin, site);
    var p2 = lesspass._deriveEncryptedLogin(encryptedLogin, site2);
    Promise.all([p1, p2]).then(derivedEncryptedLogins => {
        t.not(derivedEncryptedLogins[0], derivedEncryptedLogins[1])
    });
});

test('should return two different passwords if counter different', t => {
    const encryptedLogin = 'dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd';
    const site = 'lesspass.com';
    const option = {counter: 1};
    const option2 = {counter: 2};
    var p1 = lesspass._deriveEncryptedLogin(encryptedLogin, site, option);
    var p2 = lesspass._deriveEncryptedLogin(encryptedLogin, site, option2);
    Promise.all([p1, p2]).then(derivedEncryptedLogins => {
        t.not(derivedEncryptedLogins[0], derivedEncryptedLogins[1])
    });
});

test('should derive encrypted login with sha 256', t => {
    const encryptedLogin = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
    const site = 'lesspass.com';
    return lesspass._deriveEncryptedLogin(encryptedLogin, site).then(function (encryptedLogin) {
        t.is('be00f942fc8a', encryptedLogin);
    });
});
