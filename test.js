import test from 'ava';
import migration from './src/services/migration'

test('transformProfilesFromV1ToV2', t => {
  var profiles = [
    {
      "site": "example.org",
      "login": "test@example.org",
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "symbols": true,
      "counter": 1,
      "length": 12,
      "version": 1
    },
    {
      "site": "bank.example.org",
      "login": "test@example.org",
      "lowercase": false,
      "uppercase": false,
      "numbers": true,
      "symbols": false,
      "counter": 2,
      "length": 6,
      "version": 1
    },
    {
      "site": "example.com",
      "login": "test@example.org",
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "symbols": true,
      "counter": 1,
      "length": 16,
      "version": 2
    }
  ];
  var expectedProfiles = [
    {
      oldProfile: profiles[0],
      newProfile: {
        "site": "example.org",
        "login": "test@example.org",
        "lowercase": true,
        "uppercase": true,
        "numbers": true,
        "symbols": true,
        "counter": 1,
        "length": 16,
        "version": 2
      },
      updated: true
    },
    {
      oldProfile: profiles[1],
      newProfile: {
        "site": "bank.example.org",
        "login": "test@example.org",
        "lowercase": false,
        "uppercase": false,
        "numbers": true,
        "symbols": false,
        "counter": 2,
        "length": 6,
        "version": 2
      },
      updated: false
    },
    {
      oldProfile: profiles[2],
      newProfile: {
        "site": "example.com",
        "login": "test@example.org",
        "lowercase": true,
        "uppercase": true,
        "numbers": true,
        "symbols": true,
        "counter": 1,
        "length": 16,
        "version": 2
      },
      updated: false
    }
  ];
  t.deepEqual(migration.transformProfilesFromV1ToV2(profiles), expectedProfiles);
});

test('buildAllPasswords', t => {
  var profiles = [{
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }, {
    "site": "bank.example.org",
    "login": "test@example.org",
    "lowercase": false,
    "uppercase": false,
    "numbers": true,
    "symbols": false,
    "counter": 2,
    "length": 6,
    "version": 1
  }];

  return migration
    .buildAllPasswords(migration.transformProfilesFromV1ToV2(profiles), 'password', 'password')
    .then(newPasswordProfiles => {
      t.deepEqual(newPasswordProfiles[0].oldPassword, 'esIZ9,amEW5,');
      t.deepEqual(newPasswordProfiles[0].newPassword, '[nYxh6=osW)aH99b');
      t.deepEqual(newPasswordProfiles[1].oldPassword, '342387');
      t.deepEqual(newPasswordProfiles[1].newPassword, '446545');
    });
});

test('buildAllPasswords different master passwords', t => {
  var profiles = [{
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }, {
    "site": "bank.example.org",
    "login": "test@example.org",
    "lowercase": false,
    "uppercase": false,
    "numbers": true,
    "symbols": false,
    "counter": 2,
    "length": 6,
    "version": 1
  }];

  return migration
    .buildAllPasswords(migration.transformProfilesFromV1ToV2(profiles), 'password', 'new_password')
    .then(newPasswordProfiles => {
      t.is(newPasswordProfiles[0].oldPassword, 'esIZ9,amEW5,');
      t.is(newPasswordProfiles[0].newPassword, '\\-q5pba3wj1AHABY');
      t.is(newPasswordProfiles[1].oldPassword, '342387');
      t.is(newPasswordProfiles[1].newPassword, '559909');
    });
});
