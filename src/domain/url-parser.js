'use strict';

function _ipIsValid(ipAddress) {
    return Boolean(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress));
}

function getDomainNamev1(urlStr) {
    var matchesDomainName = urlStr.match(/^(?:https?\:\/\/)([^\/?#]+)(?:[\/?#]|$)/i);
    return matchesDomainName && matchesDomainName[1];
}

function getDomainNamev2(urlStr) {
    var domainName = getDomainNamev1(urlStr);

    var matchIp = domainName.match(/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\:?([0-9]+)?/i);
    if (matchIp) {
        return matchIp[0];
    }

    var matchesTLD = domainName.match(/([^.]*\.[^.]{2,3})(?:\.[^.]{2,3})?$/i);
    return matchesTLD && matchesTLD[0];
}

function getDomainName(urlStr, version = 1) {
    if (typeof urlStr === 'undefined') {
        return '';
    }
    if (version === 1) {
        return getDomainNamev1(urlStr);
    }
    return getDomainNamev2(urlStr);
}

function isWebExtension() {
    if (typeof chrome !== 'undefined' && typeof chrome.tabs !== 'undefined') {
        return typeof chrome.tabs.query === 'function';
    }
    return false;
}

function getCurrentUrl() {
    return new Promise(resolve => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            resolve(tabs[0].url);
        });
    });
}


function getSite(version = 1) {
    if (isWebExtension()) {
        return getCurrentUrl(version).then(currentUrl => {
            return getDomainName(currentUrl)
        });
    }
    return new Promise(resolve => {
        resolve('')
    });
}

export {getDomainName, _ipIsValid, isWebExtension, getCurrentUrl, getSite};
