import argparse
import os

from lesspass import version
from lesspass import name
from lesspass import description

EXAMPLES = """
examples:
  # no symbols
  lesspass site login masterpassword --no-symbols

  # no symbols shortcut
  lesspass site login masterpassword -lud

  # only digits and length of 8
  lesspass site login masterpassword -d -L8

  # master password in env variable
  LESSPASS_MASTER_PASSWORD="masterpassword" lesspass site login
"""

COPYRIGHT = """
copyright:
  Copyright © 2018 Guillaume Vincent <contact@lesspass.com>.  License GPLv3: GNU GPL version 3 <https://gnu.org/licenses/gpl.html>.
  This is free software: you are free to change and redistribute it.  There is NO WARRANTY, to the extent permitted by law
"""


def parse_args(args):
    parser = argparse.ArgumentParser(
        usage="lesspass SITE [LOGIN] [MASTER_PASSWORD] [OPTIONS]",
        description=description,
        epilog=EXAMPLES + COPYRIGHT,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "-v", "--version", action="version", version=version.__version__
    )
    parser.add_argument(
        "site",
        nargs="?",
        help="site used in the password generation (required)"
    )
    parser.add_argument(
        "login", nargs="?", help="login used in the password generation. Default to ''."
    )
    parser.add_argument(
        "master_password",
        default=os.environ.get("LESSPASS_MASTER_PASSWORD", None),
        nargs="?",
        help="master password used in password generation. Default to LESSPASS_MASTER_PASSWORD env variable or prompt.",
    )
    parser.add_argument(
        "-L",
        "--length",
        default=16,
        type=int,
        help="password length (default: 16, max: 35)",
    )
    parser.add_argument(
        "-C", "--counter", default=1, type=int, help="password counter (default: 1)"
    )
    parser.add_argument(
        "-p",
        "--prompt",
        dest="prompt",
        action="store_true",
        help="prompt for values interactively",
    )
    parser.add_argument(
        "-c",
        "--copy",
        dest="clipboard",
        action="store_true",
        help="copy to password to clipboard",
    )

    lowercase_group = parser.add_mutually_exclusive_group()
    lowercase_group.add_argument(
        "-l",
        "--lowercase",
        help="add lowercase in password",
        dest="l",
        action="store_true",
    )
    lowercase_group.add_argument(
        "--no-lowercase",
        help="remove lowercase from password",
        dest="nl",
        action="store_true",
    )

    uppercase_group = parser.add_mutually_exclusive_group()
    uppercase_group.add_argument(
        "-u",
        "--uppercase",
        dest="u",
        help="add uppercase in password",
        action="store_true",
    )
    uppercase_group.add_argument(
        "--no-uppercase",
        dest="nu",
        help="remove uppercase from password",
        action="store_true",
    )

    digits_group = parser.add_mutually_exclusive_group()
    digits_group.add_argument(
        "-d", "--digits", dest="d", help="add digits in password", action="store_true"
    )
    digits_group.add_argument(
        "--no-digits",
        dest="nd",
        help="remove digits from password",
        action="store_true",
    )

    symbols_group = parser.add_mutually_exclusive_group()
    symbols_group.add_argument(
        "-s", "--symbols", dest="s", help="add symbols in password", action="store_true"
    )
    symbols_group.add_argument(
        "--no-symbols",
        dest="ns",
        help="remove symbols from password",
        action="store_true",
    )
    return parser.parse_args(args)
