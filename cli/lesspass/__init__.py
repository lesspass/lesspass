name = "lesspass"
description = "LessPass is a stateless password manager."
long_description = """Name:

  LessPass - stateless password generator

Usage:

  lesspass SITE [LOGIN] [MASTER_PASSWORD] [OPTIONS]

Arguments:

  SITE                site used in the password generation (required)
  LOGIN               login used in the password generation
                      default to '' if not provided
  MASTER_PASSWORD     master password used in password generation
                      default to LESSPASS_MASTER_PASSWORD env variable or prompt

Options:

  -l, --lowercase      add lowercase in password
  -u, --uppercase      add uppercase in password
  -d, --digits         add digits in password
  -s, --symbols        add symbols in password
  -L, --length         int (default 16, max 35)
  -C, --counter        int (default 1)
  -p, --prompt         interactively prompt SITE and LOGIN (prevent leak to shell history)
  --no-lowercase       remove lowercase from password
  --no-uppercase       remove uppercase from password
  --no-digits          remove digits from password
  --no-symbols         remove symbols from password
  -c, --clipboard      copy generated password to clipboard rather than displaying it.
                       Need pbcopy (OSX), xsel or xclip (Linux) or clip (Windows).
  -v, --version        lesspass version number

Examples:

  # no symbols
  lesspass site login masterpassword --no-symbols
  # no symbols shortcut
  lesspass site login masterpassword -lud
  # only digits and length of 8
  lesspass site login masterpassword -d -L8
  # master password in env variable
  LESSPASS_MASTER_PASSWORD="masterpassword" lesspass site login

Copyright:

  Copyright © 2018 Guillaume Vincent <contact@lesspass.com>.  License GPLv3: GNU GPL version 3 <https://gnu.org/licenses/gpl.html>.
  This is free software: you are free to change and redistribute it.  There is NO WARRANTY, to the extent permitted by law."""
