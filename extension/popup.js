import lesspass from 'lesspass';
import {getDomainName} from './url-parser';

function getStore(key, callback) {
  chrome.storage.local.get(key, result => {
    callback(result[key]);
  });
}

function saveStore(key, value, callback) {
  const newStore = {};
  newStore[key] = value;
  chrome.storage.local.set(newStore, () => {
    callback(value);
  });
}

function initStore(callback) {
  getStore('lesspassStore', store => {
    const defaultStore = Object.assign({
      login: '',
      counter: 1,
      password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}
    }, store);

    saveStore('lesspassStore', defaultStore, store => {
      callback(store);
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

function fillForm(data) {
  document.getElementById('loginField').value = data.login;
  document.getElementById('masterPasswordField').value = '';
  document.getElementById('siteField').value = data.site;
  document.getElementById('passwordCounter').value = data.counter;

  const passwordInfo = data.password;
  document.getElementById('passwordLength').value = passwordInfo.length;

  document.getElementById('lowercase').checked = false;
  document.getElementById('uppercase').checked = false;
  document.getElementById('numbers').checked = false;
  document.getElementById('symbols').checked = false;

  for (let i = 0; i < passwordInfo.settings.length; i++) {
    document.querySelector(`#${passwordInfo.settings[i]}`).checked = true;
  }
}

function selectGoodField() {
  const loginField = document.getElementById('loginField');
  const passwordField = document.getElementById('masterPasswordField');
  if (loginField.value === '') {
    loginField.focus();
  } else {
    passwordField.focus();
  }
}

function displayMessage(message, field) {
  const messageField = document.getElementById(field);
  messageField.textContent = message;
}

function getData() {
  const defaultOptions = {
    login: document.getElementById('loginField').value,
    counter: document.getElementById('passwordCounter').value,
    password: {
      length: document.getElementById('passwordLength').value,
      settings: []
    }
  };
  const options = ['lowercase', 'uppercase', 'numbers', 'symbols'];

  for (let i = 0; i < options.length; i++) {
    if (document.getElementById(options[i]).checked) {
      defaultOptions.password.settings.push(options[i]);
    }
  }
  return defaultOptions;
}

function getFormData() {
  const initData = getData();
  initData.masterPassword = document.getElementById('masterPasswordField').value;
  initData.site = document.getElementById('siteField').value;
  return initData;
}

document.getElementById('saveDefaultOptionButton').addEventListener('click', () => {
  const options = getData();

  getStore('lesspassStore', store => {
    const newStore = Object.assign(store, options);

    saveStore('lesspassStore', newStore, () => {
      displayMessage('(saved)', 'messageField');
    });
  });
});

document.getElementById('generatedPasswordForm').addEventListener('change', generatePassword);
document.getElementById('passwordLength').addEventListener('input', generatePassword);
document.getElementById('passwordCounter').addEventListener('input', generatePassword);

function generatePassword() {
  const data = getFormData();
  if (!data.login || !data.masterPassword || !data.site) {
    return;
  }
  return lesspass.generatePassword(data.login, data.masterPassword, data.site, data).then(password => {
    document.getElementById('generatedPasswordField').value = password;
    return password;
  });
}

function copyPassword() {
  const generatedPasswordField = document.getElementById('generatedPasswordField');
  generatedPasswordField.disabled = false;
  generatedPasswordField.select();
  document.execCommand('copy');
  generatedPasswordField.disabled = true;
}

document.getElementById('loginButton').addEventListener('click', event => {
  event.preventDefault();
  const data = getFormData();
  if (!data.login || !data.masterPassword || !data.site) {
    displayMessage('login, master password and site are required to generate a password', 'errorMessageField');
    return;
  }

  const tabPromise = getCurrentTab();
  const passwordPromise = lesspass.generatePassword(data.login, data.masterPassword, data.site, data);
  Promise.all([passwordPromise, tabPromise]).then(values => {
    if (chrome.tabs && chrome.tabs.sendMessage) {
      chrome.tabs.sendMessage(values[1].id, {login: data.login, password: values[0]});
      window.close();
    } else {
      copyPassword();
    }
  });
});

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  if (tabs[0]) {
    initStore(store => {
      store.site = getDomainName(tabs[0].url);
      fillForm(store);
      selectGoodField();
    });
  }
});
