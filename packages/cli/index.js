#!/usr/bin/env node
const clipboardy = require("clipboardy");
const meow = require("meow");
const { calcEntropy } = require("lesspass-entropy");
const renderPassword = require("lesspass-render-password");
const read = require("read");
const chalk = require("chalk");

const helpMessage = `
    Usage
      $ lesspass <site> <login> [masterPassword] [options]

    Options
        -l                  add lowercase in password
        -u                  add uppercase in password
        -d                  add digits in password
        -s                  add symbols in password

        --no-lowercase      remove lowercase from password
        --no-uppercase      remove uppercase from password
        --no-digits         remove digits from password
        --no-symbols        remove symbols from password

        --length, -L        int (default 16)
        --counter, -c       int (default 1)

        --clipboard, -C     copy generated password to clipboard rather than displaying it.
                            Need pbcopy (OSX), xsel (Linux) or clip (Windows).

    Examples
      # no symbols
      $ lesspass lesspass.com contact@lesspass.com password --no-symbols
      OlfK63bmUhqrGODR

      # no symbols shortcut
      $ lesspass lesspass.com contact@lesspass.com password -lud
      OlfK63bmUhqrGODR

      # only digits and length of 8
      $ lesspass lesspass.com contact@lesspass.com  -d -L8
        master password:
        75837019`;

const cli = meow(helpMessage, {
  flags: {
    site: { type: "string" },
    login: { type: "string" },
    length: {
      type: "string",
      alias: "L"
    },
    counter: {
      type: "string",
      alias: "c"
    },
    clipboard: {
      type: "boolean",
      alias: "C"
    },
    l: { type: "boolean" },
    u: { type: "boolean" },
    d: { type: "boolean" },
    s: { type: "boolean" }
  }
});

function calcPassword(passwordProfile, masterPassword, copyToClipboard) {
  calcEntropy(passwordProfile, masterPassword).then(entropy => {
    const generatedPassword = renderPassword(entropy, passwordProfile.options);
    if (copyToClipboard) {
      clipboardy
        .write(generatedPassword)
        .then(() => {
          console.log("Copied to clipboard");
          process.exit();
        })
        .catch(err => {
          console.error(chalk.red("Copy failed."));
          console.error(err.message);
          process.exit(1);
        });
    } else {
      console.log(generatedPassword);
      process.exit();
    }
  });
}

function hasNoShortOption(options) {
  return !["l", "u", "d", "s"].some(
    shortOption =>
      typeof options[shortOption] !== "undefined" && options[shortOption]
  );
}

function getOptionBoolean(options, optionString) {
  const shortOption = optionString.substring(0, 1);
  if (options[shortOption]) {
    return true;
  }
  if (typeof options[optionString] === "undefined") {
    return hasNoShortOption(options);
  }
  return options[optionString];
}

const site = cli.input[0];
if (typeof site === "undefined") {
  console.log(chalk.red("site cannot be empty"));
  console.log("type lesspass --help");
  process.exit(-1);
}

const lowercase = getOptionBoolean(cli.flags, "lowercase");
const uppercase = getOptionBoolean(cli.flags, "uppercase");
const symbols = getOptionBoolean(cli.flags, "symbols");
const digits = getOptionBoolean(cli.flags, "digits");

const passwordProfile = {
  site,
  login: cli.input[1] || "",
  options: {
    counter: cli.flags.counter || 1,
    length: cli.flags.length || 16,
    lowercase,
    uppercase,
    digits,
    symbols
  }
};

const copyToClipboard = cli.flags.clipboard || false;
if (cli.input.length === 3) {
  const masterPassword = cli.input[2];
  calcPassword(passwordProfile, masterPassword, copyToClipboard);
} else {
  read({ prompt: "master password: ", silent: true }, (er, password) => {
    if (er && er.message === "canceled") {
      process.exit();
    }
    calcPassword(passwordProfile, password, copyToClipboard);
  });
}
