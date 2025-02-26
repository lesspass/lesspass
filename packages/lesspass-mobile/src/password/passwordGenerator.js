import { NativeModules } from "react-native";
import { renderPassword } from "lesspass";

export function generatePassword(masterPassword, passwordProfile) {
  const {
    site,
    login,
    length,
    counter,
    lowercase,
    uppercase,
    digits,
    symbols,
  } = passwordProfile;
  const options = { length, counter, lowercase, uppercase, digits, symbols };
  return NativeModules.LessPass.calcEntropy(
    site,
    login,
    masterPassword,
    counter.toString(16),
  ).then((entropy) => {
    return renderPassword(entropy, options);
  });
}
