import test from 'ava';
import * as urlParser from '../src/services/url-parser';

test('getDomainName', t => {
  t.is('lesspass.com', urlParser.getSite('https://lesspass.com/#!/'));
  t.is('lesspass.com', urlParser.getSite('https://lesspass.com/api/'));
  t.is('api.lesspass.com', urlParser.getSite('https://api.lesspass.com/'));
  t.is('lesspass.com', urlParser.getSite('http://lesspass.com'));
  t.is('stackoverflow.com', urlParser.getSite('http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url'));
  t.is('v4-alpha.getbootstrap.com', urlParser.getSite('http://v4-alpha.getbootstrap.com/components/buttons/'));
  t.is('accounts.google.com', urlParser.getSite('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier'));
  t.is('www.netflix.com', urlParser.getSite('https://www.netflix.com/browse'));
  t.is('www.bbc.co.uk', urlParser.getSite('https://www.bbc.co.uk'));
  t.is('192.168.1.1:10443', urlParser.getSite('https://192.168.1.1:10443/webapp/'));
  t.is('', urlParser.getSite(undefined));
});

test('getUrl', t => {
  global.chrome = {
    tabs: {
      query(a, callback){
        callback([{url: 'https://example.org'}])
      }
    }
  };
  return urlParser.getUrl().then(url => {
    t.is(url, 'https://example.org');
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
