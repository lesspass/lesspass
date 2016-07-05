import {getDomainName} from './url-parser';

var autoLoginButton = document.getElementById('autoLoginButton');

function getCurrentTab() {
  return new Promise(function (resolve) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      resolve(tabs[0]);
    });
  });
}

getCurrentTab().then(function (currentTab) {
  chrome.tabs.sendMessage(currentTab.id, {type: 'isThereALoginForm'}, function (response) {
    if (typeof response !== 'undefined') {
      if (response.isThereALoginForm) {
        autoLoginButton.style.display = 'table-cell';
      } else {
        autoLoginButton.style.display = 'none';
      }
    }
  });
});

autoLoginButton.addEventListener('click', function (event) {
  event.preventDefault();
  var login = document.getElementById('login');
  var generatedPassword = document.getElementById('generatedPassword');
  if (!generatedPassword) {
    console.log('login, master password and site are required to generate a password', 'errorMessageField');
    return;
  }

  getCurrentTab().then(function (currentTab) {
    chrome.tabs.sendMessage(currentTab.id, {
      type: 'submitForm',
      login: login.value,
      password: generatedPassword.value
    });
    window.close();
  });
});

getCurrentTab().then(function (currentTab) {
  var site = getDomainName(currentTab.url);
  if (site !== null) {
    var siteField = document.getElementById('site');
    siteField.value = site;
  }
});
