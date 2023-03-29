export function stringToArrayBuffer(string: string) {
  const base64String = unescape(encodeURIComponent(string));
  const charList = base64String.split("");
  const arrayBuffer: number[] = [];
  for (let i = 0; i < charList.length; i += 1) {
    arrayBuffer.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(arrayBuffer);
}

export function arrayBufferToHex(arrayBuffer: Iterable<number>) {
  const byteArray = new Uint8Array(arrayBuffer);
  let str = "";
  for (let i = 0; i < byteArray.byteLength; i += 1) {
    str += byteArray[i].toString(16).padStart(2, "0");
  }
  return str;
}

export default {
  stringToArrayBuffer,
  arrayBufferToHex,
};
