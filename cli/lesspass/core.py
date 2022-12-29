import getpass
import platform
import sys
import traceback
import signal

from lesspass import exceptions
from lesspass.version import __version__
from lesspass.cli import parse_args
from lesspass.profile import create_profile
from lesspass.password import generate_password
from lesspass.clipboard import copy, get_system_copy_command
from lesspass.fingerprint import getpass_with_fingerprint
from lesspass.connected import (
    save_password_profiles,
    load_password_profiles,
    logout,
    export_passwords,
)

signal.signal(signal.SIGINT, lambda s, f: sys.exit(0))


def main(args=sys.argv[1:]):
    args = parse_args(args)
    if args.clipboard and not get_system_copy_command():
        print(
            "error: To use the option -c (--copy) you need pbcopy on OSX, "
            + "xsel, xclip, or wl-clipboard on Linux, and clip on Windows"
        )
        sys.exit(3)

    if args.save_path:
        return save_password_profiles(args.config_home_path, args.url, args.save_path)

    if args.load_path:
        return load_password_profiles(args.config_home_path, args.url, args.load_path)

    if args.export_file_path:
        return export_passwords(args.config_home_path, args.url, args.export_file_path)

    if args.logout:
        return logout(args.config_home_path)

    if args.prompt:
        if not args.site:
            args.site = getpass.getpass("Site: ")
        if not args.login:
            args.login = getpass.getpass("Login: ")

    if not args.site:
        print("error: argument SITE is required but was not provided.")
        sys.exit(4)

    master_password = args.master_password
    if not master_password:
        prompt = "Master Password: "
        if args.no_fingerprint:
            master_password = getpass.getpass(prompt)
        else:
            master_password = getpass_with_fingerprint(prompt)

    if not master_password:
        print("error: argument MASTER_PASSWORD is required but was not provided")
        sys.exit(5)

    profile = create_profile(args)
    try:
        generated_password = generate_password(profile, master_password)
    except exceptions.ExcludeAllCharsAvailable:
        print("error: you can't exclude all chars available")
        sys.exit(6)

    if args.clipboard:
        try:
            copy(generated_password)
            print("Copied to clipboard")
        except Exception:
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


if __name__ == "__main__":
    main()
