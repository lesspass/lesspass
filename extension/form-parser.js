'use strict';

export {getScore};
export {getBestByScore};
export {getLoginForm};
export {getFormInfo};

function _valueIn(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value.indexOf(array[i]) >= 0) {
      return true;
    }
  }
  return false;
}

function _getButtonValue(element) {
  let nodeValue = null;
  if (element.nodeName === 'BUTTON' && element.type === 'submit') {
    nodeValue = element.childNodes[0].nodeValue;
  } else if (element.nodeName === 'INPUT' && element.type === 'submit') {
    nodeValue = element.value;
  }
  return nodeValue;
}

function _getButtonScore(buttonNodeValue) {
  const loginButtons = ['submit', 'login', 'enter', 'log in', 'signin', 'sign in', 'let\'s go'];
  const cancelButtons = ['reset', 'cancel', 'back', 'abort', 'undo', 'exit', 'empty', 'clear'];
  if (_valueIn(buttonNodeValue.toLowerCase(), loginButtons)) {
    return 10;
  }
  if (_valueIn(buttonNodeValue.toLowerCase(), cancelButtons)) {
    return -5;
  }
  return 0;
}

function getScore(form) {
  let score = 0;
  Array.from(form.elements).forEach(element => {
    const buttonNodeValue = _getButtonValue(element);
    if (buttonNodeValue !== null) {
      score += _getButtonScore(buttonNodeValue);
    }
  });
  return score;
}

function getBestByScore(forms) {
  if (forms.length > 0) {
    return forms.reduce((prev, current) => {
      return (prev.score > current.score) ? prev : current;
    });
  }
  return null;
}

function getLoginForm(document) {
  const forms = [];
  Array.from(document.forms)
    .forEach(form => {
      const score = getScore(form);
      if (score > 0) {
        forms.push({score, form});
      }
    });

  const formInfo = getBestByScore(forms);
  if (!formInfo) {
    return null;
  }

  return formInfo.form;
}

function _getPasswordField(form) {
  return form.querySelector('input[type=password]');
}

function _getLoginField(form) {
  let previousElement = null;
  const passwordField = _getPasswordField(form);
  let loginField = null;
  Array.from(form.querySelectorAll('input')).forEach(element => {
    if (element === passwordField && previousElement !== null) {
      loginField = previousElement;
    }
    previousElement = element;
  });
  return loginField;
}

function _getButton(form) {
  const buttons = [];
  Array.from(form.elements).forEach(element => {
    const buttonNodeValue = _getButtonValue(element);
    if (buttonNodeValue !== null) {
      buttons.push({score: _getButtonScore(buttonNodeValue), button: element});
    }
  });

  const buttonInfo = getBestByScore(buttons);
  if (!buttonInfo) {
    return null;
  }

  return buttonInfo.button;
}

function getFormInfo(form) {
  return {
    loginField: _getLoginField(form),
    passwordField: _getPasswordField(form),
    button: _getButton(form)
  };
}
