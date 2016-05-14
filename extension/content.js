console.log('content script');
import {getLoginForm} from './form-parser';

chrome.runtime.onMessage.addListener(message => {
  const loginForm = getLoginForm();
  loginForm.passwordField.value = message.password;
});

