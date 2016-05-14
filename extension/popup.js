import lesspass from 'lesspass';
import {getDomainName} from './url-parser';

const emailField = document.querySelector('#login-container-email');
const passwordField = document.querySelector('#login-container-password');
const siteField = document.querySelector('#login-container-site');

function createPassword(email, masterPassword, site, options) {
  const entry = {
    site,
    password: options.password
  };

  return lesspass.createMasterPassword(email, masterPassword).then(hash => {
    return lesspass.createPassword(hash, entry);
  });
}

document.getElementById('login-container-btn').addEventListener('click', () => {
  const email = emailField.value;
  const password = passwordField.value;
  const site = siteField.value;

  if (!email || !password || !site) {
    return;
  }

  chrome.storage.local.get('lesspassStore', result => {
    const store = result.lesspassStore;
    store.email = email;
    chrome.storage.local.set({lesspassStore: store});

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      createPassword(email, password, site, store.options).then(lesspassPassword => {
        chrome.tabs.sendMessage(tabs[0].id, {password: lesspassPassword});
      });
    });
  });
});

function setDomainName(domain) {
  siteField.value = domain;
}

function setEmail(email) {
  emailField.value = email;
}

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  if (tabs[0]) {
    chrome.storage.local.get('lesspassStore', result => {
      if (result && 'email' in result.lesspassStore) {
        setEmail(result.lesspassStore.email);
      }
    });

    const currentTab = tabs[0];
    setDomainName(getDomainName(currentTab.url));
  }
});
