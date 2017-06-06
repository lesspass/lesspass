import test from 'ava';
import migration from './migration'

test('transformProfilesFromV1ToV2', t => {
  var profiles = [
    {
      "site": "example.org",
      "login": "test@example.org",
      "lowercase": true,
      "uppercase": true,
      "number": true,
      "symbol": true,
      "counter": 1,
      "length": 12,
      "version": 1
    },
    {
      "site": "bank.example.org",
      "login": "test@example.org",
      "lowercase": false,
      "uppercase": false,
      "number": true,
      "symbol": false,
      "counter": 2,
      "length": 6,
      "version": 1
    }
  ];
  var expectedProfiles = [
    {
      "site": "example.org",
      "login": "test@example.org",
      "lowercase": true,
      "uppercase": true,
      "number": true,
      "symbol": true,
      "counter": 1,
      "length": 16,
      "version": 2
    },
    {
      "site": "bank.example.org",
      "login": "test@example.org",
      "lowercase": false,
      "uppercase": false,
      "number": true,
      "symbol": false,
      "counter": 2,
      "length": 6,
      "version": 2
    }
  ];
  t.deepEqual(migration.transformProfilesFromV1ToV2(profiles), expectedProfiles);
});
