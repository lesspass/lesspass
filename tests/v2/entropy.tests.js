var assert = chai.assert;

describe('LessPass', function () {
    describe('entropy', function () {
        it('calc entropy pbkdf2 with default params (100000 iterations, 32 bytes length, sha256 digest)', function () {
            this.timeout(10000);
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                counter: 1
            };
            return LessPass._calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
                assert.equal('dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e', entropy);
            })
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
            })
        });

        it('calc entropy different if counter different', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile1 = {
                iterations: 1,
                counter: 1
            };
            var passwordProfile2 = {
                iterations: 1,
                counter: 2
            };
            var p1 = LessPass._calcEntropy(site, login, masterPassword, passwordProfile1);
            var p2 = LessPass._calcEntropy(site, login, masterPassword, passwordProfile2);
            return Promise.all([p1, p2]).then(function (entropies) {
                assert.notEqual(entropies[0], entropies[1])
            });
        });

    });
});