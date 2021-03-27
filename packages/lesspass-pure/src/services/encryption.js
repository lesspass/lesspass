import LessPass from "lesspass";
import defaultPasswordProfile from "../store/defaultPassword";

export function encryptPassword(email, password) {
  return LessPass.generatePassword(
    "lesspass.com",
    email,
    password,
    defaultPasswordProfile
  );
}
