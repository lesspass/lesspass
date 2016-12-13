import test from 'ava';
import execa from 'execa';

test('default options', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password']);
    t.is(stdout, '\\g-A1-.OHEwrXjT#');
});

test('length', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--length=14']);
    t.is(stdout, '=0\\A-.OHEKvwrX');
});

test('length shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-L=14']);
    t.is(stdout, '=0\\A-.OHEKvwrX');
});

test('counter', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--counter=2']);
    t.is(stdout, 'Vf:F1\'!I`8Y2`GBE');
});

test('counter shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-c=2']);
    t.is(stdout, 'Vf:F1\'!I`8Y2`GBE');
});

test('no lowercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--no-lowercase']);
    t.is(stdout, 'JBG\\`3{+0[\"(E\\JJ');
});

test('no lowercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-uds']);
    t.is(stdout, 'JBG\\`3{+0[\"(E\\JJ');
});

test('only lowercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-l']);
    t.is(stdout, 'fmnujoqgcxmpffyh');
});

test('no uppercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--no-uppercase']);
    t.is(stdout, 'jbg\\`3{+0[\"(e\\jj');
});

test('no uppercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-lds']);
    t.is(stdout, 'jbg\\`3{+0[\"(e\\jj');
});

test('only uppercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-u']);
    t.is(stdout, 'FMNUJOQGCXMPFFYH');
});

test('no digits', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--no-digits']);
    t.is(stdout, ';zkB#m]mNF$;J_Ej');
});

test('no digits shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-lus']);
    t.is(stdout, ';zkB#m]mNF$;J_Ej');
});

test('only digits', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-d']);
    t.is(stdout, '7587019305478072');
});

test('no symbols', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--no-symbols']);
    t.is(stdout, 'OlfK63bmUhqrGODR');
});

test('no symbols shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-lud']);
    t.is(stdout, 'OlfK63bmUhqrGODR');
});

test('only symbols', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-s']);
    t.is(stdout, '<"]|\'`%};\'`>-\'[,');
});

test('test space in password', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'my Master Password']);
    t.is(stdout, 'D1PBB34\\#fh!LY={');
});