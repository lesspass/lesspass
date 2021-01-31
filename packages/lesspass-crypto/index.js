const crypto = require("crypto");

function stringToArrayBuffer(string) {
  const base64String = unescape(encodeURIComponent(string));
  const charList = base64String.split("");
  const arrayBuffer = [];
  for (let i = 0; i < charList.length; i += 1) {
    arrayBuffer.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(arrayBuffer);
}

function arrayBufferToHex(arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer);
  let str = "";
  for (let i = 0; i < byteArray.byteLength; i += 1) {
    str += byteArray[i].toString(16).padStart(2, "0");
  }
  return str;
}

function getAlgorithm(algorithm){
  const algorithms = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512"
  };
  return algorithms[algorithm.toLowerCase()]
}

function encrypt(data, password) {
  var cipher = crypto.createCipher('aes-128-cbc', password);
  var new_data = cipher.update(data, 'utf8', 'hex')
  new_data += cipher.final('hex');
  return new_data;
}

function decrypt(data, password) {
  var cipher = crypto.createDecipher('aes-128-cbc', password);
  var new_data = cipher.update(data, 'hex', 'utf8')
  new_data += cipher.final('utf8');
  return new_data;
}

module.exports = {
  stringToArrayBuffer,
  arrayBufferToHex,
  getAlgorithm,
  encrypt,
  decrypt
};
