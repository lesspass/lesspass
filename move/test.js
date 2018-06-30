import test from 'ava';
import password from './src/domain/password'
import {V1ToV2DefaultRule, V1ToV2Rule, RulesController} from './src/domain/rules';

test('buildAllPasswords', t => {
  const controller = new RulesController();
  controller.addRules([new V1ToV2DefaultRule(), new V1ToV2Rule()]);
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

  return password
    .buildAllPasswords(controller.applyRules(profiles), 'password', 'password')
    .then(newPasswordProfiles => {
      t.deepEqual(newPasswordProfiles[0].oldPassword, 'esIZ9,amEW5,');
      t.deepEqual(newPasswordProfiles[0].newPassword, '[nYxh6=osW)aH99b');
      t.deepEqual(newPasswordProfiles[1].oldPassword, '342387');
      t.deepEqual(newPasswordProfiles[1].newPassword, '446545');
    });
});

test('buildAllPasswords different master passwords', t => {
    const controller = new RulesController();
  controller.addRules([new V1ToV2DefaultRule(), new V1ToV2Rule()]);
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

  return password
    .buildAllPasswords(controller.applyRules(profiles), 'password', 'new_password')
    .then(newPasswordProfiles => {
      t.is(newPasswordProfiles[0].oldPassword, 'esIZ9,amEW5,');
      t.is(newPasswordProfiles[0].newPassword, '\\-q5pba3wj1AHABY');
      t.is(newPasswordProfiles[1].oldPassword, '342387');
      t.is(newPasswordProfiles[1].newPassword, '559909');
    });
});

test('V1ToV2DefaultRule', t => {
  const rule = new V1ToV2DefaultRule();
  const expectedProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 16,
    "version": 2
  };
  const newProfile = rule.apply({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  });
  t.deepEqual(newProfile, expectedProfile);
});

test('V1ToV2DefaultRule matchRule', t => {
  const rule = new V1ToV2DefaultRule();
  t.true(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": false,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": false,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": false,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": false,
    "counter": 1,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 2,
    "length": 12,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 13,
    "version": 1
  }));
  t.false(rule.matchRule({
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 2
  }));
});

test('V1ToV2DefaultRule no change because not a default profile', t => {
  const rule = new V1ToV2DefaultRule();
  const expectedProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 2,
    "length": 12,
    "version": 1
  };
  const newProfile = rule.apply(expectedProfile);
  t.deepEqual(newProfile, expectedProfile);
});

test('V1ToV2Rule', t => {
  const rule = new V1ToV2Rule();
  const expectedProfile = {
    "version": 2
  };
  const newProfile = rule.apply({
    "version": 1
  });
  t.deepEqual(newProfile, expectedProfile);
});


test('RulesController addRule', t => {
  const controller = new RulesController();
  controller.addRule(new V1ToV2DefaultRule());
  controller.addRule(new V1ToV2Rule());
  t.is(controller.rules.length, 2);
});

test('RulesController addRules', t => {
  const controller = new RulesController();
  controller.addRules([new V1ToV2DefaultRule()]);
  t.is(controller.rules.length, 1);
});


test('RulesController applyRules', t => {
  const controller = new RulesController();
  controller.addRules([new V1ToV2DefaultRule(), new V1ToV2Rule()]);
  const oldProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 12,
    "version": 1
  };
  const newProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": true,
    "uppercase": true,
    "numbers": true,
    "symbols": true,
    "counter": 1,
    "length": 16,
    "version": 2
  };
  const expectedProfiles = [{oldProfile: oldProfile, newProfile: newProfile}];
  const newProfiles = controller.applyRules([oldProfile]);
  t.is(newProfiles.length, 1);
  t.deepEqual(newProfiles[0], expectedProfiles[0]);
});

test('RulesController applyRules no default profile', t => {
  const controller = new RulesController();
  controller.addRules([new V1ToV2DefaultRule(), new V1ToV2Rule()]);
  const oldProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": false,
    "uppercase": false,
    "numbers": true,
    "symbols": false,
    "counter": 1,
    "length": 6,
    "version": 1
  };
  const newProfile = {
    "site": "example.org",
    "login": "test@example.org",
    "lowercase": false,
    "uppercase": false,
    "numbers": true,
    "symbols": false,
    "counter": 1,
    "length": 6,
    "version": 2
  };
  const expectedProfiles = [{oldProfile: oldProfile, newProfile: newProfile}];
  const newProfiles = controller.applyRules([oldProfile]);
  t.is(newProfiles.length, 1);
  t.deepEqual(newProfiles[0], expectedProfiles[0]);
});
