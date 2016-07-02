var autoLogin = false;

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
    if (response.isThereALoginForm) {
      autoLoginButton.style.display = 'table-cell';
      autoLogin = true;
    } else {
      autoLoginButton.style.display = 'none';
      autoLogin = false;
    }
  });
});

autoLoginButton.addEventListener('click', function (event) {
  event.preventDefault();
  const login = document.getElementById('login');
  const generatedPassword = document.getElementById('generatedPassword');
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
