module.exports = {
  prettyPrint: _prettyPrint,
  getTemplate: _getTemplate,
  _getCharType,
  _getPasswordChar,
  _string2charCodes
};

function _getCharType(template, index) {
  return template[index % template.length];
}

function _getPasswordChar(charType, index) {
  const passwordsChars = {
    V: 'AEIOUY',
    C: 'BCDFGHJKLMNPQRSTVWXZ',
    v: 'aeiouy',
    c: 'bcdfghjklmnpqrstvwxz',
    A: 'AEIOUYBCDFGHJKLMNPQRSTVWXZ',
    a: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz',
    n: '0123456789',
    s: '@&%?,=[]_:-+*$#!\'^~;()/.',
    x: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz0123456789@&%?,=[]_:-+*$#!\'^~;()/.'
  };
  const passwordChar = passwordsChars[charType];
  return passwordChar[index % passwordChar.length];
}

function _prettyPrint(hash, template) {
  let password = '';

  _string2charCodes(hash).forEach((charCode, index) => {
    const charType = _getCharType(template, index);
    password += _getPasswordChar(charType, charCode);
  });
  return password;
}

function _string2charCodes(text) {
  const charCodes = [];
  for (let i = 0; i < text.length; i++) {
    charCodes.push(text.charCodeAt(i));
  }
  return charCodes;
}

function _getTemplate(passwordTypes = ['strong']) {
  const passwordTypesInfo = {
    lowercase: {value: 'vc', order: 1},
    uppercase: {value: 'VC', order: 2},
    numbers: {value: 'n', order: 3},
    symbols: {value: 's', order: 4},
    strong: {value: 'Cvcvns', order: 5}
  };
  return passwordTypes
    .map(passwordType => passwordTypesInfo[passwordType])
    .sort((passwordType1, passwordType2) => passwordType1.order > passwordType2.order)
    .map(passwordType => passwordType.value)
    .join('');
}
