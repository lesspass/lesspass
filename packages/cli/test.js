const path = require("path");
const execa = require("execa");

const cliPath = path.resolve(__dirname, "index.js");

test("default options", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("\\g-A1-.OHEwrXjT#");
});

test("no login", async () => {
  const command = `echo password | ${cliPath} "lesspass.com"`;
  const { stdout } = await execa.shell(command);
  expect(stdout).toBe("master password: 7Cw-APO5Co?G>W>u");
});

test("options can be before parameters", async () => {
  const { stdout } = await execa(cliPath, [
    "-C",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("Copied to clipboard");
});

test("long options can be before parameters", async () => {
  const { stdout } = await execa(cliPath, [
    "--clipboard",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("Copied to clipboard");
});

test("length", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--length=14"
  ]);
  expect(stdout).toBe("=0\\A-.OHEKvwrX");
});

test("length shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-L=14"
  ]);
  expect(stdout).toBe("=0\\A-.OHEKvwrX");
});

test("counter", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--counter=2"
  ]);
  expect(stdout).toBe("Vf:F1'!I`8Y2`GBE");
});

test("counter shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-c=2"
  ]);
  expect(stdout).toBe("Vf:F1'!I`8Y2`GBE");
});

test("no lowercase", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-lowercase"
  ]);
  expect(stdout).toBe('JBG\\`3{+0["(E\\JJ');
});

test("no lowercase shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-uds"
  ]);
  expect(stdout).toBe('JBG\\`3{+0["(E\\JJ');
});

test("only lowercase", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-l"
  ]);
  expect(stdout).toBe("fmnujoqgcxmpffyh");
});

test("no uppercase", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-uppercase"
  ]);
  expect(stdout).toBe('jbg\\`3{+0["(e\\jj');
});

test("no uppercase shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lds"
  ]);
  expect(stdout).toBe('jbg\\`3{+0["(e\\jj');
});

test("only uppercase", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-u"
  ]);
  expect(stdout).toBe("FMNUJOQGCXMPFFYH");
});

test("no digits", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-digits"
  ]);
  expect(stdout).toBe(";zkB#m]mNF$;J_Ej");
});

test("no digits shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lus"
  ]);
  expect(stdout).toBe(";zkB#m]mNF$;J_Ej");
});

test("only digits", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-d"
  ]);
  expect(stdout).toBe("7587019305478072");
});

test("no symbols", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-symbols"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("no symbols shortcut", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lud"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("only symbols", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-s"
  ]);
  expect(stdout).toBe("<\"]|'`%};'`>-'[,");
});

test("test space in password", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "my Master Password"
  ]);
  expect(stdout).toBe("D1PBB34\\#fh!LY={");
});

test("doc 1", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "--no-symbols"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("doc 1 options before", async () => {
  const { stdout } = await execa(cliPath, [
    "--no-symbols",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("doc 2", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-lud"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("doc 2 options before", async () => {
  const { stdout } = await execa(cliPath, [
    "-lud",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("OlfK63bmUhqrGODR");
});

test("doc 3", async () => {
  const { stdout } = await execa(cliPath, [
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-d",
    "-L8"
  ]);
  expect(stdout).toBe("75837019");
});

test("doc 3 options before", async () => {
  const { stdout } = await execa(cliPath, [
    "-d",
    "-L8",
    "lesspass.com",
    "contact@lesspass.com",
    "password"
  ]);
  expect(stdout).toBe("75837019");
});

test("doc 3 options before and after", async () => {
  const { stdout } = await execa(cliPath, [
    "-d",
    "lesspass.com",
    "contact@lesspass.com",
    "password",
    "-L8"
  ]);
  expect(stdout).toBe("75837019");
});

test("nrt numbers should be considered as string not integers", async () => {
  const p = execa(cliPath, ["example.org", "123", "password"]);
  const p2 = execa(cliPath, ["example.org", "0123", "password"]);
  const p3 = execa(cliPath, ["example.org", '"0123"', "password"]);
  const p4 = execa(cliPath, ["example.org", "00123", "password"]);
  return Promise.all([p, p2, p3, p4]).then(v => {
    expect(v[0].stdout).toBe("sMb8}N&`J4wkF9q~");
    expect(v[1].stdout).toBe("5,4SqhB2[=/h\\DZh");
    expect(v[2].stdout).toBe("u0Fz)EOJ4i\\{{;a~");
    expect(v[3].stdout).toBe('=}|O7hN0ZHdjQ{">');
  });
});
