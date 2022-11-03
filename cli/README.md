# LessPass command-line interface (CLI)

## Install

    python3 -m pip install --user lesspass # 3.6, 3.8+

## Usage

    lesspass SITE [LOGIN] [MASTER_PASSWORD] [OPTIONS]

    LessPass is a stateless password manager.

    positional arguments:
      site                  site used in the password generation (required)
      login                 login used in the password generation. Default to ''.
      master_password       master password used in password generation. Default to LESSPASS_MASTER_PASSWORD env variable or prompt.

    optional arguments:
      -h, --help            show this help message and exit
      -v, --version         show program's version number and exit
      -L [5-35], --length [5-35]
                            password length (default: 16, min: 5, max: 35)
      -C COUNTER, --counter COUNTER
                            password counter (default: 1)
      -p, --prompt          prompt for values interactively
      -c, --copy            copy the password to clipboard
      --exclude EXCLUDE     exclude char from generated password
      --no-fingerprint      hide visual fingerprint of the master password when you type
      --save [SAVE_PATH]    [beta] Save your password profiles. /!\ File not encrypted. Use carefully. (default: ~/.config/lesspass/profiles.json)
      --load LOAD_PATH      [beta] Load your password profiles file
      --url URL             [beta] LessPass Database URL used by --save and --load command
      -l, --lowercase       add lowercase in password
      --no-lowercase        remove lowercase from password
      -u, --uppercase       add uppercase in password
      --no-uppercase        remove uppercase from password
      -d, --digits          add digits in password
      --no-digits           remove digits from password
      -s, --symbols         add symbols in password
      --no-symbols          remove symbols from password

## Examples

### no symbols

    lesspass site login masterpassword --no-symbols

### no symbols shortcut

    lesspass site login masterpassword -lud

### only digits and length of 8

    lesspass site login masterpassword -d -L8

### master password in env variable

    LESSPASS_MASTER_PASSWORD="masterpassword" lesspass site login

## License

This project is licensed under the terms of the GNU GPLv3.
