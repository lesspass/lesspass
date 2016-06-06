import {getLoginForm} from './form-parser';
chrome.runtime.onMessage.addListener(message => {
  const loginForm = getLoginForm();
  loginForm.loginField.value = message.login;
  loginForm.passwordField.value = message.password;

  var event = new Event('input');
  loginForm.loginField.dispatchEvent(event);
  loginForm.passwordField.dispatchEvent(event);

  loginForm.form.submit();
});

