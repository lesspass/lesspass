import sys
import os
import json
import subprocess

root_path = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))


def usage():
    script_name = os.path.basename(__file__)
    print(f"Example: python {script_name} lesspass-web-extension --patch")
    print(f"Example: python {script_name} lesspass-site --patch")
    sys.exit(1)


def print_packages_version(packages):
    len_col = len(max(packages, key=packages.get)) + 2
    for package in packages:
        with open(os.path.join(root_path, "packages", package, "package.json")) as f:
            package_json = json.load(f)
            printable_package_name = f"{package:{len_col}s}"
            version = package_json["version"]
            print(f"|{printable_package_name}|{version.rjust(9, ' ')}|")


def get_package_version(package):
    with open(os.path.join(root_path, "packages", package, "package.json")) as f:
        package_json = json.load(f)
        return package_json["version"]


def set_version(file_path, version):
    with open(file_path) as f:
        package_json = json.load(f)
    package_json["version"] = version

    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(package_json, f, ensure_ascii=False, indent=2)


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

    package_short_name = packages[package]
    subprocess.run(
        [
            "yarn",
            "workspace",
            f"{package}",
            "version",
            f"--{bump}",
            "--no-git-tag-version",
            "--no-commit-hooks",
        ]
    )
    version = get_package_version(package)
    if package == "lesspass-web-extension":
        subprocess.run(
            [
                "yarn",
                "workspace",
                "lesspass-web-extension-legacy",
                "version",
                f"--{bump}",
                "--no-git-tag-version",
                "--no-commit-hooks",
            ]
        )
        set_version(
            os.path.join(root_path, "packages", package, "extension", "manifest.json"),
            version,
        )
        set_version(
            os.path.join(
                root_path,
                "packages",
                "lesspass-web-extension-legacy",
                "extension",
                "manifest.json",
            ),
            version,
        )
        subprocess.run(["yarn", "workspace", "lesspass-crypto", "build"])
        subprocess.run(["yarn", "workspace", "lesspass-pure", "build"])
        subprocess.run(["yarn", "workspace", "lesspass-web-extension", "build"])
        subprocess.run(["yarn", "workspace", "lesspass-web-extension-legacy", "build"])
        subprocess.run(["git", "add", "."])
    tag = f"{package_short_name}-v{version}"
    subprocess.run(["git", "commit", "-a", "-m", tag])
    subprocess.run(["git", "tag", tag])
