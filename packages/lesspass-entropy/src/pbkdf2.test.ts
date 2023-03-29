import pbkdf2 from "./pbkdf2";

describe("pbkdf2", () => {
  it("secret, salt, 2 iterations, 32 keylen, sha256 hash", () =>
    pbkdf2("secret", "salt", 2, 32, "sha256").then((key) => {
      expect(
        "f92f45f9df4c2aeabae1ed3c16f7b64660c1f8e377fa9b4699b23c2c3a29f569"
      ).toBe(key);
    }));
  it("use pbkdf2 with 8192 iterations and sha256", () =>
    pbkdf2("password", "test@example.org", 8192, 32, "sha256").then((key) => {
      expect(
        "d8af5f918db6b65b1db3d3984e5a400e39e1dbb19462220e4431de283809f472"
      ).toBe(key);
    }));
  it("customize number of iterations", () =>
    pbkdf2("password", "test@example.org", 4096, 32, "sha256").then((key) => {
      expect(
        "0a91208545e3aa4935d3a22984ca097a7669259a04d261ac16361bdc1a2e960f"
      ).toBe(key);
    }));
  it("customize key length", () =>
    pbkdf2("password", "test@example.org", 8192, 16, "sha256").then((key) => {
      expect("d8af5f918db6b65b1db3d3984e5a400e").toBe(key);
    }));
  it("customize iterations and key length", () =>
    pbkdf2("password", "test@example.org", 4096, 16, "sha256").then((key) => {
      expect("0a91208545e3aa4935d3a22984ca097a").toBe(key);
    }));
  it("utf8 parameter", () =>
    pbkdf2("♥ LessPass ♥", "test@example.org", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "997fe81d3d0db236e039c75efdb487f17a902fdf94f9dacaa9884329c85d9651"
        ).toBe(key);
      }
    ));
  it("auto generated test 0", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 1", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 2", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 3", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 4", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 5", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 6", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 7", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 8", () =>
    pbkdf2("password", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0"
        ).toBe(key);
      }
    ));
  it("auto generated test 9", () =>
    pbkdf2("password", "lesspass", 8192, 32, "sha256").then((key) => {
      expect(
        "7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116"
      ).toBe(key);
    }));
  it("auto generated test 10", () =>
    pbkdf2("password2", "contact@lesspass.com", 8192, 32, "sha256").then(
      (key) => {
        expect(
          "ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4"
        ).toBe(key);
      }
    ));
});
