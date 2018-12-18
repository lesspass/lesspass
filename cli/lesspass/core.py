import getpass
import platform
import sys
import traceback

from lesspass.version import __version__
from lesspass.cli import parse_args
from lesspass.help import print_help
from lesspass.validator import validate_args
from lesspass.profile import create_profile
from lesspass.password import generate_password
from lesspass.clipboard import copy


def main(args=sys.argv[1:]):
    args = parse_args(args)
    if args.version:
        print(__version__)
        sys.exit(0)
    error, help_message = validate_args(args)
    if args.help:
        print_help(help_message, long=True)
        sys.exit(0)
    if error:
        print_help(help_message)
        sys.exit(0)
    profile, master_password = create_profile(args)

    if args.prompt:
        profile["site"] = getpass.getpass("Site: ")
        profile["login"] = getpass.getpass("Login: ")

    if not master_password:
        master_password = getpass.getpass("Master Password: ")

    generated_password = generate_password(profile, master_password)

    if args.clipboard:
        try:
            copy(generated_password)
            print("Copied to clipboard")
        except Exception as e:
            print("Copy failed, we are sorry")
            print("Can you send us an email at contact@lesspass.com\n")
            print("-" * 80)
            print("Object: [LessPass][cli] Copy issue on %s" % platform.system())
            print("Hello,")
            print("I got an issue with LessPass cli software.\n")
            traceback.print_exc()
            print("-" * 80)
    else:
        print(generated_password)
