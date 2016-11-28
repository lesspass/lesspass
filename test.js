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
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=false']);
    t.is(stdout, 'JBG\\`3{+0[\"(E\\JJ');
});

test('no lowercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-l=false']);
    t.is(stdout, 'JBG\\`3{+0[\"(E\\JJ');
});

test('boolean option case insensitive', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=FalSe']);
    t.is(stdout, 'JBG\\`3{+0[\"(E\\JJ');
});

test('boolean option case insensitive', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--lowercase=TrUe']);
    t.is(stdout, '\\g-A1-.OHEwrXjT#');
});

test('no uppercase', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--uppercase=false']);
    t.is(stdout, 'jbg\\`3{+0[\"(e\\jj');
});

test('no uppercase shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-u=false']);
    t.is(stdout, 'jbg\\`3{+0[\"(e\\jj');
});

test('no numbers', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--numbers=false']);
    t.is(stdout, ';zkB#m]mNF$;J_Ej');
});

test('no numbers shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-n=false']);
    t.is(stdout, ';zkB#m]mNF$;J_Ej');
});
test('no symbols', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '--symbols=false']);
    t.is(stdout, 'OlfK63bmUhqrGODR');
});

test('no symbols shortcut', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'password', '-s=false']);
    t.is(stdout, 'OlfK63bmUhqrGODR');
});

test('test space in password', async t => {
    const {stdout} = await execa('./cli.js', ['lesspass.com', 'contact@lesspass.com', 'my Master Password']);
    t.is(stdout, 'D1PBB34\\#fh!LY={');
});