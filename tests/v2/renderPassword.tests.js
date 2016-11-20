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
});