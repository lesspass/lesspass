import {getDomainName} from './url-parser';

function getCurrentTab() {
    return new Promise(function (resolve) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            resolve(tabs[0]);
        });
    });
}

getCurrentTab().then(function (currentTab) {
    var site = getDomainName(currentTab.url);
    if (site !== null) {
        var siteField = document.getElementById('site');
        siteField.value = site;
    }
    document.getElementById('login').focus();
});
