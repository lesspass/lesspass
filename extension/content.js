import {getLoginForm} from './form-parser';
chrome.runtime.onMessage.addListener(message => {
  const loginForm = getLoginForm();
  loginForm.loginField.value = message.login;
  loginForm.passwordField.value = message.password;
  loginForm.form.submit();
});

