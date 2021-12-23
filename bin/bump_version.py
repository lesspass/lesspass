import sys
import os
import json
import subprocess

root_path = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))


def usage():
    script_name = os.path.basename(__file__)
    print(f"Example: python {script_name} lesspass-web-extension patch")
    print(f"Example: python {script_name} lesspass-site patch")
    sys.exit(1)


def print_packages_version(packages):
    len_col = len(max(packages, key=packages.get)) + 2
    for package in packages:
        with open(os.path.join(root_path, "packages", package, "package.json")) as f:
            package_json = json.load(f)
            printable_package_name = f"{package:{len_col}s}"
            version = package_json["version"]
            print(f"|{printable_package_name}|{version.rjust(9, ' ')}|")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        usage()

    has_error = False
    package = sys.argv[1]
    packages = {
        "lesspass": "lesspass",
        "lesspass-crypto": "crypto",
        "lesspass-entropy": "entropy",
        "lesspass-fingerprint": "fingerprint",
        "lesspass-pure": "pure",
        "lesspass-render-password": "render-password",
        "lesspass-site": "site",
        "lesspass-web-extension": "web-extension",
    }
    if package not in packages:
        print(f"Error: {package} is invalid, should be one of:")
        packages_joined = "\n  ".join(packages.keys())
        print(f"  {packages_joined}")
        has_error = True

    bump = sys.argv[2]
    bump = bump.replace("-", "")
    valid_bumps = ["major", "minor", "patch"]
    if bump not in valid_bumps:
        valid_bump_joined = ",".join(valid_bumps)
        print(f"Error: {bump} is invalid, should be one of {valid_bump_joined}")
        has_error = True

    if has_error:
        usage()

    print_packages_version(packages)

    package_short_name = packages[package]
    subprocess.run(
        ["yarn", "config", "set", "version-tag-prefix", f"{package_short_name}-v"]
    )
    subprocess.run(
        ["yarn", "config", "set", "version-git-message", f"{package_short_name}-v%s"]
    )
    subprocess.run(["yarn", "workspace", f"{package}", "version", f"--{bump}"])
    subprocess.run(["yarn", "config", "set", "version-tag-prefix", "v"])
    subprocess.run(["yarn", "config", "set", "version-git-message", "v%s"])

    print_packages_version(packages)
