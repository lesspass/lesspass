'use strict';

export function getDomainName(urlStr) {
    if (typeof urlStr === 'undefined') {
        return '';
    }
    var matchesDomainName = urlStr.match(/^(?:https?\:\/\/)([^\/?#]+)(?:[\/?#]|$)/i);
    var domainName = matchesDomainName && matchesDomainName[1];
    var matchIp = domainName.match(/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\:?([0-9]+)?/i);
    if (matchIp) {
        return matchIp[0];
    }
    var matchesTLD = domainName.match(/([^.]*\.[^.]{2,3})(?:\.[^.]{2,3})?$/i);
    return matchesTLD && matchesTLD[0];
}

export function getSite() {
    return new Promise(resolve => {
        if (typeof chrome !== 'undefined' && typeof chrome.tabs !== 'undefined' && typeof chrome.tabs.query !== 'undefined') {
            chrome.tabs.query({active: true, currentWindow: true}, tabs => {
                resolve(getDomainName(tabs[0].url));
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
