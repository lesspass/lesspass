#!/usr/bin/env node
"use strict";
const clipboardy = require("clipboardy");
const meow = require("meow");
const LessPass = require("lesspass");
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

function calcPassword(site, login, masterPassword, passwordProfile) {
  LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(
    function(generatedPassword) {
      if (passwordProfile.clipboard) {
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
    }
  );
}

function hasNoShortOption(options) {
  return !["l", "u", "d", "s"].some(function(shortOption) {
    return typeof options[shortOption] !== "undefined" && options[shortOption];
  });
}

function getOptionBoolean(options, optionString) {
  let shortOption = optionString.substring(0, 1);
  if (options[shortOption]) {
    return true;
  }
  if (typeof options[optionString] === "undefined") {
    return hasNoShortOption(options);
  }
  return options[optionString];
}

const lowercase = getOptionBoolean(cli.flags, "lowercase");
const uppercase = getOptionBoolean(cli.flags, "uppercase");
const symbols = getOptionBoolean(cli.flags, "symbols");
const digits = getOptionBoolean(cli.flags, "digits");

const passwordProfile = {
  lowercase: lowercase,
  uppercase: uppercase,
  symbols: symbols,
  numbers: digits,
  clipboard: cli.flags.clipboard || false,
  length: cli.flags.length || 16,
  counter: cli.flags.counter || 1
};

const site = cli.input[0];
let login = cli.input[1];

if (typeof login === "undefined") {
  login = "";
}

if (typeof site === "undefined") {
  console.log(chalk.red("site cannot be empty"));
  console.log("type lesspass --help");
  process.exit(-1);
}

if (cli.input.length === 3) {
  const masterPassword = cli.input[2];
  calcPassword(site, login, masterPassword, passwordProfile);
} else {
  read({ prompt: "master password: ", silent: true }, function(er, password) {
    if (er && er.message === "canceled") {
      process.exit();
    }
    calcPassword(site, login, password, passwordProfile);
  });
}
