var assert = chai.assert;

describe('LessPass v2', function() {
  describe('API', function() {
    it('render password', function() {
      this.timeout(10000);
      var site = 'example.org';
      var login = 'contact@example.org';
      var masterPassword = 'password';
      var passwordProfile = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
        version: 2
      };
      return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function(generatedPassword) {
        assert.equal('WHLpUL)e00[iHR+w', generatedPassword);
      });
    });
    it('render password no symbols', function() {
      this.timeout(10000);
      var site = 'example.org';
      var login = 'contact@example.org';
      var masterPassword = 'password';
      var passwordProfile = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
        length: 14,
        counter: 2,
        version: 2
      };
      return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function(generatedPassword) {
        assert.equal('MBAsB7b1Prt8Sl', generatedPassword);
      });
    });
    it('render password only digit', function() {
      this.timeout(10000);
      var site = 'example.org';
      var login = 'contact@example.org';
      var masterPassword = 'password';
      var passwordProfile = {
        lowercase: false,
        uppercase: false,
        numbers: true,
        symbols: false,
        length: 6,
        counter: 3,
        version: 2
      };
      return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function(generatedPassword) {
        assert.equal('117843', generatedPassword);
      });
    });
    it('render password no number', function() {
      this.timeout(10000);
      var site = 'example.org';
      var login = 'contact@example.org';
      var masterPassword = 'password';
      var passwordProfile = {
        lowercase: true,
        uppercase: true,
        numbers: false,
        symbols: true,
        length: 14,
        counter: 1,
        version: 2
      };
      return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function(generatedPassword) {
        assert.equal("sB>{qF}wN%/-fm", generatedPassword);
      });
    });
  });
});

