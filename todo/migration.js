module.exports = {
  transformProfilesFromV1ToV2: function(profiles) {
    const newProfiles = [];
    profiles.forEach(profile => {
      const newProfile = {
        "site": profile.site,
        "login": profile.login,
        "lowercase": profile.lowercase,
        "uppercase": profile.uppercase,
        "number": profile.number,
        "symbol": profile.symbol,
        "counter": profile.counter,
        "length": profile.length,
        "version": profile.version,
      };
      if (profile.version === 1) {
        newProfile.version = 2;
        if (profile.length === 12) {
          newProfile.length = 16;
        }
      }
      newProfiles.push(newProfile)
    });
    return newProfiles
  }
};
