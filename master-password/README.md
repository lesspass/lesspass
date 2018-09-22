# LessPass render password

LessPass node module used to render password based on options

## Requirements

  - node LTS

## Install

    npm install lesspass-master-password

## Usage

    var LessPassMasterPassword = require("lesspass-master-password");
    console.log(LessPassMasterPassword.getFingerprint("e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"))
    //  [
      {
        color: "#FFB5DA",
        icon: "fa-flask"
      },
      {
        color: "#009191",
        icon: "fa-archiv,e"
      },
      {
        color: "#B5DAFE",
        icon: "fa-beer"
      }
    ]

## Tests

    npm test

## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
