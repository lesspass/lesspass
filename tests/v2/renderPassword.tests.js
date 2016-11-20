var assert = chai.assert;

describe('LessPass v2', function () {
    it('render password use remainder of long division beetween entropy and set of chars length as an index ', function () {
        var entropy = 'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e';
        var setOfCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        assert.equal('y', LessPass._renderPassword(entropy, setOfCharacters)[0]);
    });
    it('render password use quotient as second entropy recursively', function () {
        var entropy = 'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e';
        var setOfCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        assert.equal('5', LessPass._renderPassword(entropy, setOfCharacters)[1]);
    });
    it('render password has default length of 14', function () {
        var entropy = 'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e';
        var setOfCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        assert.equal(14, LessPass._renderPassword(entropy, setOfCharacters).length);
    });
    it('render password can specify length', function () {
        var entropy = 'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e';
        var setOfCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var passwordProfile = {
            length: 20
        };
        assert.equal(20, LessPass._renderPassword(entropy, setOfCharacters, passwordProfile).length);
    });
    it('include one char per set of characters', function () {
        var password = LessPass._includeOneCharPerSetOfCharacters('123456', bigInt(7 * 6 + 2), 'uT');
        assert.equal('T12u3456', password);
    });
    it('render password return at least one char in every characters set', function () {
        var entropy = 'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e';
        var setOfCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        var passwordProfile = {
            length: 6,
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
        };
        var generatedPassword = LessPass._renderPassword(entropy, setOfCharacters, passwordProfile);
        var passwordLength = generatedPassword.length;
        var lowercaseOk = false;
        var uppercaseOk = false;
        var digitsOk = false;
        var symbolsOk = false;
        while (passwordLength--) {
            if ('abcdefghijklmnopqrstuvwxyz'.indexOf(generatedPassword[passwordLength]) !== -1) {
                lowercaseOk = true;
            }
            if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(generatedPassword[passwordLength]) !== -1) {
                uppercaseOk = true;
            }
            if ('0123456789'.indexOf(generatedPassword[passwordLength]) !== -1) {
                digitsOk = true;
            }
            if ('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.indexOf(generatedPassword[passwordLength]) !== -1) {
                symbolsOk = true;
            }
        }
        assert.equal(6, generatedPassword.length);
        assert(lowercaseOk && uppercaseOk && digitsOk && symbolsOk, 'there is no at least one char in every characters set');
    });
});