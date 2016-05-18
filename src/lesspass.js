import encryption from './encryption';

module.exports = {
  generatePassword: encryption.generatePassword,
  createPassword: encryption.createPassword,
  createMasterPassword: encryption.encryptLogin
};
