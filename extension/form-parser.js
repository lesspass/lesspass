'use strict';

function getLoginForm() {
  const loginForm = {};
  Array.from(document.forms).forEach(form => {
    let i = 0;
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(node => {
      if (node.type === 'password') {
        loginForm.form = form;
        loginForm.passwordField = node;
        if (i > 0) {
          loginForm.loginField = inputs[i - 1];
        }
      }
      i++;
    });
  });
  return loginForm;
}

export {getLoginForm};
