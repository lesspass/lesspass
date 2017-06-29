import LessPass from 'lesspass';

export default {
  buildPromise(profile, masterPassword){
    return LessPass.generatePassword(profile.site, profile.login, masterPassword, {
      lowercase: profile.lowercase,
      uppercase: profile.uppercase,
      numbers: profile.numbers,
      symbols: profile.symbols,
      length: profile.length,
      counter: profile.counter,
      version: profile.version,
    });
  },
  buildAllPasswords: function(profiles, oldMasterPassword, newMasterPassword) {
    const buildPasswordPromises = [];
    profiles.forEach(profile => {
      buildPasswordPromises.push(this.buildPromise(profile.oldProfile, oldMasterPassword));
      buildPasswordPromises.push(this.buildPromise(profile.newProfile, newMasterPassword));
    });

    return Promise.all(buildPasswordPromises).then(values => {
      profiles.forEach((profile, i) => {
        profile.oldPassword = values[i * 2];
        profile.newPassword = values[i * 2 + 1]
      });
      return profiles;
    });
  }
};
