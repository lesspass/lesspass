export function stringToArrayBuffer(s: string) {
  const base64String = unescape(encodeURIComponent(s));
  const charList = base64String.split("");
  const arrayBuffer = [];
  for (let i = 0; i < charList.length; i += 1) {
    arrayBuffer.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(arrayBuffer);
}

export function arrayBufferToHex(arrayBuffer: ArrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer);
  let str = "";
  for (let i = 0; i < byteArray.byteLength; i += 1) {
    str += byteArray[i].toString(16).padStart(2, "0");
  }
  return str;
}

export function getAlgorithm(algorithm: string) {
  const algorithms: { [k: string]: string } = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512",
  };
  const lowercaseAlgorithm = algorithm.toLowerCase();
  if (lowercaseAlgorithm in algorithms) {
    return algorithms[lowercaseAlgorithm];
  }
  return "SHA-256";
}
