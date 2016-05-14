function displayMessage(message) {
  document.getElementById('message').innerHTML = message;
  setTimeout(() => {
    document.getElementById('message').innerHTML = '';
  }, 3000);
}

function saveOptions(e) {
  e.preventDefault();
  const defaultOptions = {
    password: {
      counter: document.querySelector('#passwordCounter').value,
      length: document.querySelector('#passwordLength').value,
      settings: []
    }
  };
  const options = ['lowercase', 'uppercase', 'numbers', 'symbols'];

  for (let i = 0; i < options.length; i++) {
    if (document.querySelector(`#${options[i]}`).checked) {
      defaultOptions.password.settings.push(options[i]);
    }
  }

  chrome.storage.local.set({
    lesspassStore: {
      options: defaultOptions
    }
  });
  displayMessage('(saved)');
}

function restoreOptions() {
  chrome.storage.local.get('lesspassStore', value => {
    if (value && 'options' in value.lesspassStore) {
      const passwordInfo = value.lesspassStore.options.password;
      document.querySelector('#passwordCounter').value = passwordInfo.counter;
      document.querySelector('#passwordLength').value = passwordInfo.length;

      document.querySelector('#lowercase').checked = false;
      document.querySelector('#uppercase').checked = false;
      document.querySelector('#numbers').checked = false;
      document.querySelector('#symbols').checked = false;

      for (let i = 0; i < passwordInfo.settings.length; i++) {
        document.querySelector(`#${passwordInfo.settings[i]}`).checked = true;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);

document.querySelector('form').addEventListener('submit', saveOptions);
