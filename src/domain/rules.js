export class V1ToV2DefaultRule {
  apply(profile) {
    const newProfile = Object.assign({}, profile);
    if (this.matchRule(profile)) {
      newProfile.version = 2;
      newProfile.length = 16;
    }
    return newProfile;
  }

  matchRule(profile) {
    return (
      profile.lowercase &&
      profile.uppercase &&
      profile.numbers &&
      profile.symbols &&
      profile.version === 1 &&
      profile.length === 12 &&
      profile.counter === 1
    );
  }
}

export class V1ToV2Rule {
  apply(profile) {
    const newProfile = Object.assign({}, profile);
    newProfile.version = 2;
    return newProfile;
  }
}

export class RulesController {
  constructor() {
    this.rules = [];
  }

  addRules(rules) {
    this.rules = this.rules.concat(rules);
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  applyRules(profiles) {
    var newProfiles = [];
    profiles.forEach(profile => {
      let oldProfile = Object.assign({}, profile);
      let newProfile = Object.assign({}, profile);
      this.rules.forEach(rule => {
        newProfile = rule.apply(newProfile);
      });
      newProfiles.push({
        oldProfile,
        newProfile
      });
    });
    return newProfiles;
  }
}
