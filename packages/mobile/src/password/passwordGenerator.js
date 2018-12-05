import { NativeModules } from "react-native";
import renderLessPassPassword from "lesspass-render-password";

export function generatePassword(masterPassword, passwordProfile) {
  const { site, login, options } = passwordProfile;
  const { counter } = options;
  return NativeModules.LessPass.calcEntropy(
    site,
    login,
    masterPassword,
    counter.toString()
  ).then(entropy => {
    return renderLessPassPassword(entropy, options);
  });
}
