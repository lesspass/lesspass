var assert = chai.assert;

describe('LessPass v1', function () {
    describe('encryptLogin', function () {
        it('should use pbkdf2 with 8192 iterations and sha256', function (done) {
            LessPass.encryptLogin('test@example.org', 'password').then(function (encryptedLogin) {
                assert.equal('d8af5f918db6b65b1db3d3984e5a400e39e1dbb19462220e4431de283809f472', encryptedLogin);
                done();
            });
        });

        it('should allow to customize number of iterations', function (done) {
            LessPass.encryptLogin('test@example.org', 'password', {iterations: 4096}).then(function (encryptedLogin) {
                assert.equal('0a91208545e3aa4935d3a22984ca097a7669259a04d261ac16361bdc1a2e960f', encryptedLogin);
                done();
            });
        });

        it('should allow to customize key length', function (done) {
            LessPass.encryptLogin('test@example.org', 'password', {keylen: 16}).then(function (encryptedLogin) {
                assert.equal('d8af5f918db6b65b1db3d3984e5a400e', encryptedLogin);
                done();
            });
        });

        it('should allow to customize iterations and key length', function (done) {
            LessPass.encryptLogin('test@example.org', 'password', {
                iterations: 4096,
                keylen: 16
            }).then(function (encryptedLogin) {
                assert.equal('0a91208545e3aa4935d3a22984ca097a', encryptedLogin);
                done();
            });
        });

        it('should allow utf8 parameter', function () {
            return LessPass.encryptLogin('test@example.org', '♥ LessPass ♥').then(function (encryptedLogin) {
                assert.equal('997fe81d3d0db236e039c75efdb487f17a902fdf94f9dacaa9884329c85d9651', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 0', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 1', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 2', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 3', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 4', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 5', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 6', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 7', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 8', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password').then(function (encryptedLogin) {
                assert.equal('63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 9', function () {
            return LessPass.encryptLogin('lesspass', 'password').then(function (encryptedLogin) {
                assert.equal('7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116', encryptedLogin);
            });
        });

        it('encryptLogin auto generated test 10', function () {
            return LessPass.encryptLogin('contact@lesspass.com', 'password2').then(function (encryptedLogin) {
                assert.equal('ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4', encryptedLogin);
            });
        });
    });

    describe('renderPassword', function () {
        it('render password', function (done) {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azYS7,olOL2]', generatedPassword);
                done();
            })
        });

        it('render password with a custom template', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true,
                template: 'n'
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                var i = generatedPassword.length;
                while (i--) {
                    assert('0123456789'.indexOf(generatedPassword[i]) !== -1)
                }
            })
        });

        it('render password with a custom template too short', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true,
                template: 'CvcnCVsn'
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('Sor4WU:8Wad5', generatedPassword);
            })
        });

        it('render password with a custom template too long', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 6,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true,
                template: 'CvcnCVsn'
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('Sor4WU', generatedPassword);
            })
        });

        it('render password auto generated test 0', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azYS7,olOL2]', generatedPassword);
            })
        });

        it('render password auto generated test 1', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 14,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azYS7,olOL2]iz', generatedPassword);
            })
        });

        it('render password auto generated test 2', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: false,
                numbers: false,
                symbols: false,
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azyseqololat', generatedPassword);
            })
        });

        it('render password auto generated test 3', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: false,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('AZ3[EQ7@OL2]', generatedPassword);
            })
        });

        it('render password auto generated test 4', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: false,
                uppercase: false,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('4?3[7,7@7@2]', generatedPassword);
            })
        });

        it('render password auto generated test 5', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: false,
                uppercase: false,
                numbers: false,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('[?=[&,:@:@[]', generatedPassword);
            })
        });

        it('render password auto generated test 6', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: false
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azYS7uwAW8at', generatedPassword);
            })
        });

        it('render password auto generated test 7', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: false,
                symbols: false
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('azYSeqOLolAT', generatedPassword);
            })
        });

        it('render password auto generated test 8', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0';
            var passwordOptions = {
                counter: 2,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('obYT2=olOV9=', generatedPassword);
            })
        });

        it('render password auto generated test 9', function () {
            var site = 'lesspass.com';
            var encryptedLogin = '7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('erOC1%imIW3,', generatedPassword);
            })
        });

        it('render password auto generated test 10', function () {
            var site = 'lesspass.com';
            var encryptedLogin = 'ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4';
            var passwordOptions = {
                counter: 1,
                length: 12,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            };
            return LessPass.renderPassword(encryptedLogin, site, passwordOptions).then(function (generatedPassword) {
                assert.equal('uvUM5_ucUP5=', generatedPassword);
            })
        });


    });
    describe('fingerprint', function () {
        it('createFingerprint', function () {
            return LessPass.createFingerprint('password').then(function (fingerprint) {
                assert.equal('e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e', fingerprint);
            })
        });
    });

    describe('generatePassword', function () {
        it('generate password', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('izIS5@ozYM2?', generatedPassword);
            });
        });
        it('generate password auto generated test 0', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('azYS7,olOL2]', generatedPassword);
            });
        });

        it('generate password auto generated test 1', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 14,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('azYS7,olOL2]iz', generatedPassword);
            });
        });

        it('generate password auto generated test 2', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: false,
                digits: false,
                symbols: false,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('azyseqololat', generatedPassword);
            });
        });

        it('generate password auto generated test 3', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: false,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('AZ3[EQ7@OL2]', generatedPassword);
            });
        });

        it('generate password auto generated test 4', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: false,
                uppercase: false,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('4?3[7,7@7@2]', generatedPassword);
            });
        });

        it('generate password auto generated test 5', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: false,
                uppercase: false,
                digits: false,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('[?=[&,:@:@[]', generatedPassword);
            });
        });

        it('generate password auto generated test 6', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: false,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('azYS7uwAW8at', generatedPassword);
            });
        });

        it('generate password auto generated test 7', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: false,
                symbols: false,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('azYSeqOLolAT', generatedPassword);
            });
        });

        it('generate password auto generated test 8', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 2,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('obYT2=olOV9=', generatedPassword);
            });
        });

        it('generate password auto generated test 9', function () {
            var site = 'lesspass.com';
            var login = 'lesspass';
            var masterPassword = 'password';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('erOC1%imIW3,', generatedPassword);
            });
        });

        it('generate password auto generated test 10', function () {
            var site = 'lesspass.com';
            var login = 'contact@lesspass.com';
            var masterPassword = 'password2';
            var passwordProfile = {
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 12,
                index: 1,
                version: 1,
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('uvUM5_ucUP5=', generatedPassword);
            });
        });
    });
});

