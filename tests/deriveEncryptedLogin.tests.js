import test from 'ava';
import lesspass from '../src/lesspass';

test('should derive encrypted login with default length', t => {
    const encryptedLogin = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
    const site = 'lesspass.com';
    t.is(12, lesspass._deriveEncryptedLogin(encryptedLogin, site).length);
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
    t.is(
        lesspass._deriveEncryptedLogin(encryptedLogin, site),
        lesspass._deriveEncryptedLogin(encryptedLogin, site, option)
    );
});

test('should derive encrypted login with defined length', t => {
    const encryptedLogin = 'd79d8482f708122288af7b259393a58fe05840f4555cc935cdd3f062b9aa75ed';
    const site = 'lesspass.com';
    const option = {
        counter: 1,
        length: 10,
    };
    t.is(10, lesspass._deriveEncryptedLogin(encryptedLogin, site, option).length);
});

test('should return two different passwords if site different', t => {
    const encryptedLogin = 'f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9';
    const site = 'google.com';
    const site2 = 'facebook.com';
    t.not(
        lesspass._deriveEncryptedLogin(encryptedLogin, site),
        lesspass._deriveEncryptedLogin(encryptedLogin, site2)
    );
});

test('should return two different passwords if counter different', t => {
    const encryptedLogin = 'dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd';
    const site = 'lesspass.com';
    const option = {counter: 1};
    const option2 = {counter: 2};
    t.not(
        lesspass._deriveEncryptedLogin(encryptedLogin, site, option),
        lesspass._deriveEncryptedLogin(encryptedLogin, site, option2)
    );
});

test('should derive encrypted login with sha 256', t => {
    const encryptedLogin = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
    const site = 'lesspass.com';
    t.is('be00f942fc8a', lesspass._deriveEncryptedLogin(encryptedLogin, site));
});
