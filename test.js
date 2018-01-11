import test from "ava";
import execa from "execa";

test("default options", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "\\g-A1-.OHEwrXjT#");
});

test("no login", async t => {
  return execa.shell('echo password | ./cli.js "lesspass.com"').then(result => {
    t.is(result.stdout, "master password: 7Cw-APO5Co?G>W>u");
  });
});

test("options can be before parameters", async t => {
  const { stdout } = await execa("./cli.js", [
    "-C",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "Copied to clipboard");
});

test("long options can be before parameters", async t => {
  const { stdout } = await execa("./cli.js", [
    "--clipboard",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "Copied to clipboard");
});

test("length", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--length=14"
  ]);
  t.is(stdout, "=0\\A-.OHEKvwrX");
});

test("length shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-L=14"
  ]);
  t.is(stdout, "=0\\A-.OHEKvwrX");
});

test("counter", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--counter=2"
  ]);
  t.is(stdout, "Vf:F1'!I`8Y2`GBE");
});

test("counter shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-c=2"
  ]);
  t.is(stdout, "Vf:F1'!I`8Y2`GBE");
});

test("no lowercase", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-lowercase"
  ]);
  t.is(stdout, 'JBG\\`3{+0["(E\\JJ');
});

test("no lowercase shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-uds"
  ]);
  t.is(stdout, 'JBG\\`3{+0["(E\\JJ');
});

test("only lowercase", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-l"
  ]);
  t.is(stdout, "fmnujoqgcxmpffyh");
});

test("no uppercase", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-uppercase"
  ]);
  t.is(stdout, 'jbg\\`3{+0["(e\\jj');
});

test("no uppercase shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lds"
  ]);
  t.is(stdout, 'jbg\\`3{+0["(e\\jj');
});

test("only uppercase", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-u"
  ]);
  t.is(stdout, "FMNUJOQGCXMPFFYH");
});

test("no digits", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-digits"
  ]);
  t.is(stdout, ";zkB#m]mNF$;J_Ej");
});

test("no digits shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lus"
  ]);
  t.is(stdout, ";zkB#m]mNF$;J_Ej");
});

test("only digits", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-d"
  ]);
  t.is(stdout, "7587019305478072");
});

test("no symbols", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-symbols"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("no symbols shortcut", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lud"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("only symbols", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-s"
  ]);
  t.is(stdout, "<\"]|'`%};'`>-'[,");
});

test("test space in password", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "my Master Password"
  ]);
  t.is(stdout, "D1PBB34\\#fh!LY={");
});

test("doc 1", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-symbols"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("doc 1 options before", async t => {
  const { stdout } = await execa("./cli.js", [
    "--no-symbols",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("doc 2", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lud"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("doc 2 options before", async t => {
  const { stdout } = await execa("./cli.js", [
    "-lud",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "OlfK63bmUhqrGODR");
});

test("doc 3", async t => {
  const { stdout } = await execa("./cli.js", [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-d",
    "-L8"
  ]);
  t.is(stdout, "75837019");
});

test("doc 3 options before", async t => {
  const { stdout } = await execa("./cli.js", [
    "-d",
    "-L8",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  t.is(stdout, "75837019");
});

test("doc 3 options before and after", async t => {
  const { stdout } = await execa("./cli.js", [
    "-d",
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-L8"
  ]);
  t.is(stdout, "75837019");
});

test("nrt numbers should be considered as string not integers", async t => {
  const p = execa("./cli.js", ["example.org", "123", "password"]);
  const p2 = execa("./cli.js", ["example.org", "0123", "password"]);
  const p3 = execa("./cli.js", ["example.org", '"0123"', "password"]);
  const p4 = execa("./cli.js", ["example.org", "00123", "password"]);
  return Promise.all([p, p2, p3, p4]).then(v => {
    t.is(v[0].stdout, "sMb8}N&`J4wkF9q~");
    t.is(v[1].stdout, "5,4SqhB2[=/h\\DZh");
    t.is(v[2].stdout, "u0Fz)EOJ4i\\{{;a~");
    t.is(v[3].stdout, '=}|O7hN0ZHdjQ{">');
  });
});
