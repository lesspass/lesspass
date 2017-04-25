'use strict';

export function getSite(url) {
  if (typeof url === 'undefined') {
    return '';
  }
  var matchesDomainName = url.match(/^(?:https?\:\/\/)([^\/?#]+)(?:[\/?#]|$)/i);
  return matchesDomainName && matchesDomainName[1];
}

export function getUrl() {
  return new Promise(resolve => {
    if (typeof chrome !== 'undefined' && typeof chrome.tabs !== 'undefined' && typeof chrome.tabs.query !== 'undefined') {
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        resolve(tabs[0].url);
      });
    } else {
      resolve('');
    }
  });
}

export function getPasswordFromUrlQuery(query) {
  const password = {};
  ['uppercase', 'lowercase', 'numbers', 'symbols'].forEach(booleanishQuery => {
    if (booleanishQuery in query) {
      password[booleanishQuery] = (query[booleanishQuery].toLowerCase() === "true" || query[booleanishQuery].toLowerCase() === "1");
    }
  });
  ['site', 'login'].forEach(stringQuery => {
    if (stringQuery in query) {
      password[stringQuery] = query[stringQuery]
    }
  });
  ['length', 'counter', 'version'].forEach(intQuery => {
    if (intQuery in query) {
      password[intQuery] = parseInt(query[intQuery], 10)
    }
  });
  return password;
}
