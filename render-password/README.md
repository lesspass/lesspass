# LessPass render password

LessPass node module used to render password based on options

## Requirements

  - node LTS

## Install

    npm install lesspass-render-password

## Usage

    var renderLessPassPassword = require("lesspass-render-password");
    var options = {
      length: 16,
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true
    };
    var entropy = "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e"; 
    var password = renderLessPassPassword(entropy, options);

## Tests

    npm test

## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
