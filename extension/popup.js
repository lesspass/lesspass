import lesspass from 'lesspass';
import {getDomainName} from './url-parser';

const emailField = document.querySelector('#login-container-email');
const passwordField = document.querySelector('#login-container-password');
const siteField = document.querySelector('#login-container-site');

function getLocalStore(storeName) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(storeName, result => {
      if (result === null) {
        return reject(`${storeName} not found`);
      }
      resolve(result);
    });
  });
}

function updateStore(store) {
  return new Promise(resolve => {
    chrome.storage.local.set(store, () => {
      resolve(store);
    });
  });
}

function getCurrentTab() {
  return new Promise(resolve => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      resolve(tabs[0]);
    });
  });
}

document.getElementById('login-container-btn').addEventListener('click', () => {
  const email = emailField.value;
  const site = siteField.value;
  const masterPassword = passwordField.value;

  if (!email || !masterPassword || !site) {
    return;
  }

  const storagePromise = getLocalStore('lesspassStore').then(store => {
    store.lesspassStore.email = email;
    return updateStore(store);
  });

  const hashPromise = lesspass.createMasterPassword(email, masterPassword);

  const lesspassPromise = Promise.all([hashPromise, storagePromise])
    .then(values => {
      const entry = {
        site,
        password: values[1].lesspassStore.password
      };
      return lesspass.createPassword(values[0], entry);
    });

  const tabPromise = getCurrentTab();

  Promise.all([lesspassPromise, tabPromise]).then(values => {
    chrome.tabs.sendMessage(values[1].id, {login: email, password: values[0]});
    window.close();
  });
});

function setDomainName(domain) {
  siteField.value = domain;
}

function setEmail(email) {
  emailField.value = email;
}

function initStore(callback) {
  chrome.storage.local.get('lesspassStore', result => {
    const store = {
      password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols'], counter: 1},
      email: ''
    };
    const lesspassStore = result.lesspassStore;
    if (typeof lesspassStore !== 'undefined') {
      if ('email' in lesspassStore) {
        store.email = lesspassStore.email;
      }
      if ('password' in lesspassStore) {
        store.password = lesspassStore.password;
      }
    }
    chrome.storage.local.set({lesspassStore: store}, () => {
      callback(store);
    });
  });
}

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  if (tabs[0]) {
    initStore(store => {
      setEmail(store.email);
    });

    const currentTab = tabs[0];
    setDomainName(getDomainName(currentTab.url));
    passwordField.focus();
  }
});
