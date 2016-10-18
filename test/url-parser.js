import test from 'ava';
import {getDomainName, _ipIsValid, isWebExtension, getCurrentUrl, getSite} from '../src/domain/url-parser';

test(t => {
    t.is('lesspass.com', getDomainName('https://lesspass.com/#!/'));
    t.is('lesspass.com', getDomainName('https://lesspass.com/api/'));
    t.is('lesspass.com', getDomainName('https://api.lesspass.com/'));
    t.is('192.168.1.1', getDomainName('https://192.168.1.1:10443/webapp/'));
});

test('ip validator', t => {
    t.true(_ipIsValid('192.168.23.215'));
    t.true(_ipIsValid('127.0.0.1'));
    t.false(_ipIsValid('210.110'), 'must have 4 octets');
    t.false(_ipIsValid('255'), 'must have 4 octets');
    t.false(_ipIsValid('y.y.y.y'), 'only digits are allowed');
    t.false(_ipIsValid('255.0.0.y'), 'only digits are allowed');
    t.false(_ipIsValid('666.10.10.20'), 'octet number must be between [0-255]');
    t.false(_ipIsValid('4444.11.11.11'), 'octet number must be between [0-255]');
    t.false(_ipIsValid('33.3333.33.3'), 'octet number must be between [0-255]');
});

test('get web extension context', t => {
    global.chrome = undefined;
    t.false(isWebExtension())
});

test('get web extension context', t => {
    global.chrome = {
        tabs: {
            query(a, b){
                console.log(a, b)
            }
        }
    };
    t.true(isWebExtension())
});

test('get current tab', t => {
    const url = 'example.org';
    global.chrome = {
        tabs: {
            query(a, callback){
                callback([{url}])
            }
        }
    };
    return getCurrentUrl().then(currentUrl => {
        t.is(currentUrl, url)
    });
});

test('get default site', t => {
    global.chrome = {
        tabs: {
            query(a, callback){
                callback([{url: 'https://example.org'}])
            }
        }
    };
    return getSite().then(site => {
        t.is(site, 'example.org')
    });
});

test('get default site if not in web extension', t => {
    global.chrome = undefined;
    return getSite().then(site => {
        t.is(site, '')
    });
});