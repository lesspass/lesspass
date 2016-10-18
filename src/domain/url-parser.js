'use strict';
import tld from 'tldjs';

function _ipIsValid(ipAddress) {
    return Boolean(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress));
}

function getDomainName(urlStr) {
    const domain = tld.getDomain(urlStr);
    const subDomain = tld.getSubdomain(urlStr);
    const ip = `${subDomain}.${domain}`;
    if (_ipIsValid(ip)) {
        return ip;
    }
    return domain;
}

function isWebExtension() {
    if (typeof chrome !== 'undefined' && typeof chrome.tabs !== 'undefined') {
        return typeof chrome.tabs.query === 'function';
    }
    return false;
}

function getCurrentUrl() {
    return new Promise(function (resolve) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            resolve(tabs[0].url);
        });
    });
}


function getSite() {
    if (isWebExtension()) {
        return getCurrentUrl().then(currentUrl => {
            return getDomainName(currentUrl)
        });
    }
    return new Promise(function (resolve) {
        resolve('')
    });
}

export {getDomainName, _ipIsValid, isWebExtension, getCurrentUrl, getSite};
