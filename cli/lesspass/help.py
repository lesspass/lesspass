usage = "Usage: lesspass SITE [LOGIN] [MASTER_PASSWORD] [OPTIONS]"


def get_short_help(help_message):
    return "%s\nErrors:\n%s\nTry 'lesspass --help' for more information." % (
        usage,
        help_message,
    )


def get_long_help():
    return """Name:

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
  -L, --length         int (default 16)
  -C, --counter        int (default 1)
  -p, --prompt         interactively prompt SITE and LOGIN (prevent leak to shell history)
  --no-lowercase       remove lowercase from password
  --no-uppercase       remove uppercase from password
  --no-digits          remove digits from password
  --no-symbols         remove symbols from password
  -c, --clipboard      copy generated password to clipboard rather than displaying it.
                       Need pbcopy (OSX), xsel or xclip (Linux) or clip (Windows).

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


def print_help(help_message, long=False):
    usage = "Usage: lesspass SITE [LOGIN] [MASTER_PASSWORD] [OPTIONS]"
    short_help = "%s\nErrors:\n%s\nTry 'lesspass --help' for more information." % (
        usage,
        help_message,
    )
    if long:
        print(get_long_help())
    else:
        print(short_help)
