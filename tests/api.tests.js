import test from 'ava';
import lesspass from '../src/lesspass';

test('generate password', t => {
  const login = 'contact@lesspass.com';
  const masterPassword = 'password';
  const site = 'lesspass.com';
  const options = {
    counter: 1,
    password: {
      length: 12,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
    }
  };
  return lesspass.generatePassword(login, masterPassword, site, options).then(password => {
    t.is(password, 'azYS7,olOL2]');
  });
});

test('generate password2', t => {
  const login = 'contact@lesspass.com';
  const masterPassword = 'password';
  const site = 'lesspass.com';
  const options = {
    counter: 1,
    password: {
      length: 12,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
    }
  };
  return lesspass.generatePassword(login, masterPassword, site, options).then(password => {
    t.is(password, 'azYS7,olOL2]');
  });
});

test('generate password3', t => {
  const login = 'contact@lesspass.com';
  const masterPassword = 'password';
  const site = 'lesspass.com';
  const options = {
    counter: 1,
    password: {
      length: 12,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
    }
  };
  return lesspass.generatePassword(login, masterPassword, site, options).then(password => {
    t.is(password, 'azYS7,olOL2]');
  });
});

test('auto generated password', t => {
  const promises = [];
  const entries = [
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'azYS7,olOL2]'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 14, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'azYS7,olOL2]iz'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase']}},
      generatedPassword: 'azyseqololat'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'AZ3[EQ7@OL2]'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['numbers', 'symbols']}},
      generatedPassword: '4?3[7,7@7@2]'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['symbols']}},
      generatedPassword: '[?=[&,:@:@[]'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers']}},
      generatedPassword: 'azYS7uwAW8at'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase']}},
      generatedPassword: 'azYSeqOLolAT'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 2, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'obYT2=olOV9='
    },
    {
      login: 'lesspass',
      masterPassword: 'password',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'erOC1%imIW3,'
    },
    {
      login: 'contact@lesspass.com',
      masterPassword: 'password2',
      site: 'lesspass.com',
      options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}},
      generatedPassword: 'uvUM5_ucUP5='
    }
  ];

  for (const entry of entries) {
    promises.push(lesspass.generatePassword(entry.login, entry.masterPassword, entry.site, entry.options));
  }

  t.plan(entries.length);
  return Promise.all(promises).then(values => {
    for (let i = 0; i < values.length; i++) {
      t.is(entries[i].generatedPassword, values[i], JSON.stringify(entries[i], null, 2));
    }
  });
});
