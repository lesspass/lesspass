import test from 'ava';
import * as urlParser from '../src/domain/url-parser';

test(t => {
    t.is('lesspass.com', urlParser.getDomainName('https://lesspass.com/#!/'));
    t.is('lesspass.com', urlParser.getDomainName('https://lesspass.com/api/'));
    t.is('api.lesspass.com', urlParser.getDomainName('https://api.lesspass.com/'));
    t.is('lesspass.com', urlParser.getDomainName('http://lesspass.com'));
    t.is('stackoverflow.com', urlParser.getDomainName('http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url'));
    t.is('v4-alpha.getbootstrap.com', urlParser.getDomainName('http://v4-alpha.getbootstrap.com/components/buttons/'));
    t.is('accounts.google.com', urlParser.getDomainName('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier'));
    t.is('www.netflix.com', urlParser.getDomainName('https://www.netflix.com/browse'));
    t.is('www.bbc.co.uk', urlParser.getDomainName('https://www.bbc.co.uk'));
    t.is('192.168.1.1:10443', urlParser.getDomainName('https://192.168.1.1:10443/webapp/'));
});

test('urlParser.getDomainName v2', t => {
    t.is('lesspass.com', urlParser.getDomainName('https://lesspass.com/#!/', 2));
    t.is('lesspass.com', urlParser.getDomainName('https://lesspass.com/api/', 2));
    t.is('lesspass.com', urlParser.getDomainName('https://api.lesspass.com/', 2));
    t.is('lesspass.com', urlParser.getDomainName('http://lesspass.com', 2));
    t.is('stackoverflow.com', urlParser.getDomainName('http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url', 2));
    t.is('getbootstrap.com', urlParser.getDomainName('http://v4-alpha.getbootstrap.com/components/buttons/', 2));
    t.is('google.com', urlParser.getDomainName('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier', 2));
    t.is('netflix.com', urlParser.getDomainName('https://www.netflix.com/browse', 2));
    t.is('bbc.co.uk', urlParser.getDomainName('https://www.bbc.co.uk', 2));
    t.is('192.168.1.1:10443', urlParser.getDomainName('https://192.168.1.1:10443/webapp/', 2));
    t.is('192.168.1.1', urlParser.getDomainName('http://192.168.1.1', 2));
    t.is('192.168.1.1', urlParser.getDomainName('https://192.168.1.1/', 2));
    t.is('', urlParser.getDomainName(undefined, 2));
});

test('ip validator', t => {
    t.true(urlParser._ipIsValid('192.168.23.215'));
    t.true(urlParser._ipIsValid('127.0.0.1'));
    t.false(urlParser._ipIsValid('210.110'), 'must have 4 octets');
    t.false(urlParser._ipIsValid('255'), 'must have 4 octets');
    t.false(urlParser._ipIsValid('y.y.y.y'), 'only digits are allowed');
    t.false(urlParser._ipIsValid('255.0.0.y'), 'only digits are allowed');
    t.false(urlParser._ipIsValid('666.10.10.20'), 'octet number must be between [0-255]');
    t.false(urlParser._ipIsValid('4444.11.11.11'), 'octet number must be between [0-255]');
    t.false(urlParser._ipIsValid('33.3333.33.3'), 'octet number must be between [0-255]');
});

test('get web extension context', t => {
    global.chrome = undefined;
    t.false(urlParser.isWebExtension())
});

test('get web extension context', t => {
    global.chrome = {
        tabs: {
            query(a, b){
                console.log(a, b)
            }
        }
    };
    t.true(urlParser.isWebExtension())
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
    return urlParser.getCurrentUrl().then(currentUrl => {
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
    return urlParser.getSite().then(site => {
        t.is(site, 'example.org')
    });
});

test('get default site if not in web extension', t => {
    global.chrome = undefined;
    return urlParser.getSite().then(site => {
        t.is(site, '')
    });
});

test('getPasswordFromUrlQuery', t => {
    const query = {
        login: "test@example.org",
        site: "example.org",
        uppercase: "true",
        lowercase: "true",
        numbers: "true",
        symbols: "false",
        length: "16",
        counter: "1",
        version: "2"
    };
    const expectedPassword = {
        login: "test@example.org",
        site: "example.org",
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false,
        length: 16,
        counter: 1,
        version: 2
    };
    t.deepEqual(urlParser.getPasswordFromUrlQuery(query), expectedPassword);
});

test('getPasswordFromUrlQuery booleanish', t => {
    const query = {
        uppercase: "true",
        lowercase: "TrUe",
        numbers: "1",
        symbols: "0",
    };
    const expectedPassword = {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false,
    };
    t.deepEqual(urlParser.getPasswordFromUrlQuery(query), expectedPassword);
});