var assert = chai.assert;

describe('LessPass', function () {
    describe('pbkdf2', function () {
        it('should secret, salt, 2, 32, sha256', function () {
            return LessPass.pbkdf2('secret', 'salt', 2, 32, 'sha256').then(function (key) {
                assert.equal('f92f45f9df4c2aeabae1ed3c16f7b64660c1f8e377fa9b4699b23c2c3a29f569', key);
            })
        });
    });
});





