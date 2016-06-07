import {getLoginForm, getFormInfo} from './form-parser';

function _isThereALoginForm(formInfo) {
  return formInfo.passwordField !== null;
}

function fillFormFields(formInfo, data) {
  const event = new Event('input');
  formInfo.passwordField.value = data.password;
  formInfo.passwordField.dispatchEvent(event);

  if (formInfo.loginField !== null) {
    formInfo.loginField.value = data.login;
    formInfo.loginField.dispatchEvent(event);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const loginForm = getLoginForm(window.document);
  if (loginForm !== null) {
    const formInfo = getFormInfo(loginForm);

    if (message.type === 'isThereALoginForm') {
      return sendResponse({isThereALoginForm: _isThereALoginForm(formInfo)});
    }

    if (message.type === 'submitForm') {
      const data = {password: message.password, login: message.login};
      fillFormFields(formInfo, data);

      if (formInfo.button === null) {
        loginForm.submit();
      } else {
        formInfo.button.click();
      }
    }
  }
});
