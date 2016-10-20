import test from 'ava';
import execa from 'execa';

test('default options', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password']);
    t.is(stdout, 'azYS7,olOL2]');
});

test('length', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--length=14']);
    t.is(stdout, 'azYS7,olOL2]iz');
});

test('length shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-L=14']);
    t.is(stdout, 'azYS7,olOL2]iz');
});

test('counter', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--counter=2']);
    t.is(stdout, 'obYT2=olOV9=');
});

test('counter shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-c=2']);
    t.is(stdout, 'obYT2=olOV9=');
});

test('no lowercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=false']);
    t.is(stdout, 'AZ3[EQ7@OL2]');
});

test('no lowercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-l=false']);
    t.is(stdout, 'AZ3[EQ7@OL2]');
});

test('boolean option case insensitive', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=FalSe']);
    t.is(stdout, 'AZ3[EQ7@OL2]');
});

test('boolean option case insensitive', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=TrUe']);
    t.is(stdout, 'azYS7,olOL2]');
});

test('no uppercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--uppercase=false']);
    t.is(stdout, 'az3[eq7@ol2]');
});

test('no uppercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-u=false']);
    t.is(stdout, 'az3[eq7@ol2]');
});

test('no numbers', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--numbers=false']);
    t.is(stdout, 'azYS&uwAW@at');
});

test('no numbers shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-n=false']);
    t.is(stdout, 'azYS&uwAW@at');
});
test('no symbols', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--symbols=false']);
    t.is(stdout, 'azYS7uwAW8at');
});

test('no symbols shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-s=false']);
    t.is(stdout, 'azYS7uwAW8at');
});

test('test space in password', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'my Master Password']);
    t.is(stdout, 'onAV7&uvEC2=');
});