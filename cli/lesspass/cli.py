import argparse
import os

from lesspass import version
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


def _get_config_path():
    DEFAULT_XDG_CONFIG_HOME = os.path.join(os.path.expanduser("~"), ".config")
    data_home_path = os.environ.get("XDG_CONFIG_HOME", DEFAULT_XDG_CONFIG_HOME)
    return os.path.join(data_home_path, "lesspass")


def range_type(value_string):
    value = int(value_string)
    if value not in range(5, 35 + 1):
        raise argparse.ArgumentTypeError("%s is out of range, choose in [5-35]" % value)
    return value


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
        "site", nargs="?", help="site used in the password generation (required)"
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
        choices=range(5, 35 + 1),
        type=range_type,
        help="password length (default: 16, min: 5, max: 35)",
        metavar="[5-35]",
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
        help="copy the password to clipboard",
    )
    parser.add_argument(
        "--exclude",
        default=None,
        help="exclude char from generated password",
    )
    parser.add_argument(
        "--no-fingerprint",
        dest="no_fingerprint",
        action="store_true",
        help="hide visual fingerprint of the master password when you type",
    )
    config_home_path = _get_config_path()
    backup_file = os.path.join(config_home_path, "profiles.json")
    parser.add_argument(
        "--logout",
        dest="logout",
        action="store_true",
        help=f"Remove {os.path.join(config_home_path, 'config.json')} file",
    )
    parser.add_argument(
        "--save",
        dest="save_path",
        nargs="?",
        const=backup_file,
        default=None,
        help=f"[beta] Save your password profiles. /!\ File not encrypted. Use carefully. (default: {backup_file})",
    )
    parser.add_argument(
        "--load",
        dest="load_path",
        default=None,
        help="[beta] Load your password profiles file",
    )
    parser.add_argument(
        "--export",
        dest="export_file_path",
        default=None,
        help="Export all your passwords from LessPass database with your master password. /!\ Please note that your passwords will be saved in clear text.",
    )
    parser.add_argument(
        "--config-home-path",
        dest="config_home_path",
        default=config_home_path,
        help=argparse.SUPPRESS,
    )
    parser.add_argument(
        "--url",
        dest="url",
        default="https://api.lesspass.com/",
        help="[beta] LessPass Database URL used by --save and --load command",
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
    parsed_args = parser.parse_args(args)
    if not parsed_args.url.endswith("/"):
        parsed_args.url = f"{parsed_args.url}/"
    return parsed_args
