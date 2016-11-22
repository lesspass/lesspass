var assert = chai.assert;

describe('LessPass v2', function () {
    describe('entropy', function () {
        it('calc entropy pbkdf2 with default params (100000 iterations, 32 bytes length, sha256 digest)', function () {
            this.timeout(10000);
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                iterations: 100000,
                keylen: 32,
                digest: 'sha256',
                counter: 1
            };
            return LessPass._calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
                assert.equal('dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e', entropy);
            });
        });
        it('calc entropy with different options (8192 iterations, 16 bytes length, sha512 digest)', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                iterations: 8192,
                keylen: 16,
                digest: 'sha512',
                counter: 1
            };
            return LessPass._calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
                assert.equal('fff211c16a4e776b3574c6a5c91fd252', entropy);
            });
        });
        it('calc entropy different if counter different 1', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile1 = {iterations: 1, keylen: 16, digest: 'sha256', counter: 1};
            return LessPass._calcEntropy(site, login, masterPassword, passwordProfile1).then(function (entropy) {
                assert.equal('d3ec1e988dd0b3640c7491cd2c2a88b5', entropy)
            });
        });
        it('calc entropy different if counter different 2', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile2 = {iterations: 1, keylen: 16, digest: 'sha256', counter: 2};
            return LessPass._calcEntropy(site, login, masterPassword, passwordProfile2).then(function (entropy) {
                assert.equal('ddfb1136260f930c21f6d72f6eddbd40', entropy)
            });
        });
        it('consume entropy', function () {
            var password = LessPass._consumeEntropy('', bigInt(4 * 4 + 2), "abcd", 2);
            assert.equal('ca', password.value);
            assert.equal(1, password.entropy)
        });
    });
});
