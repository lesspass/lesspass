import {getLoginForm, getFormInfo} from './form-parser';

const loginForm = getLoginForm(window.document);

chrome.runtime.onMessage.addListener(message => {
  if (loginForm !== null) {
    const formInfo = getFormInfo(loginForm);
    console.log(formInfo);
    formInfo.passwordField.value = message.password;

    const event = new Event('input');
    formInfo.passwordField.dispatchEvent(event);

    if (formInfo.loginField !== null) {
      formInfo.loginField.value = message.login;
      formInfo.loginField.dispatchEvent(event);
    }

    if (message.submitForm) {
      if (formInfo.button === null) {
        loginForm.submit();
      } else {
        formInfo.button.click();
      }
    }
  }
});

