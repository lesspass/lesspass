import contextlib
import getpass
import json
import os
import sys

import requests

from lesspass.password import generate_password


def _login(config_home_path, url, master_password):
    os.makedirs(config_home_path, exist_ok=True)
    config_path = os.path.join(config_home_path, "config.json")
    tokens = None
    if os.path.exists(config_path):
        with open(config_path, encoding="utf-8") as f:
            tokens = json.load(f)

    if tokens:
        refresh_tokens = requests.post(
            f"{url}auth/jwt/refresh/",
            json=tokens,
        )
        if refresh_tokens.status_code == 200:
            token_refreshed = refresh_tokens.json()
            with open(config_path, "w", encoding="utf-8") as f:
                json.dump(token_refreshed, f, ensure_ascii=False, indent=4)
            return token_refreshed["access"]

    print("LessPass login")
    email = input("Email: ")
    if not email or not master_password:
        print("Email and Master Password are mandatory")
        sys.exit(1)
    default_lesspass_profile = {
        "site": "lesspass.com",
        "login": email,
        "lowercase": True,
        "uppercase": True,
        "digits": True,
        "symbols": True,
        "length": 16,
        "counter": 1,
    }
    encrypted_password = generate_password(default_lesspass_profile, master_password)
    r = requests.post(
        f"{url}auth/jwt/create/",
        json={"email": email, "password": encrypted_password},
    )
    if r.status_code != 200:
        print("Wrong email and/or master password")
        sys.exit(1)
    tokens = r.json()
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(tokens, f, ensure_ascii=False, indent=4)
        print(f"Access and refresh tokens saved in {config_path}")
    return tokens["access"]


def logout(config_home_path):
    config_path = os.path.join(config_home_path, "config.json")
    try:
        with contextlib.suppress(FileNotFoundError):
            os.remove(config_path)
        print("Logout successful")
    except Exception as e:
        print(f"Can't remove {config_path}. Error was:")
        print(e)


def save_password_profiles(config_home_path, url, backup_path):
    master_password = getpass.getpass("Master Password: ")
    token = _login(config_home_path, url, master_password)
    r = requests.get(f"{url}passwords/", headers={"Authorization": "JWT %s" % token})
    with open(backup_path, "w", encoding="utf-8") as f:
        json.dump(r.json(), f, ensure_ascii=False, indent=4)

    print(f"Password profiles saved in {backup_path}")


def load_password_profiles(config_home_path, url, backup_path):
    master_password = getpass.getpass("Master Password: ")
    token = _login(config_home_path, url, master_password)
    with open(backup_path, encoding="utf-8") as f:
        data = json.load(f)

        for password_profile in data["results"]:
            get_password_profiles = requests.get(
                f"{url}passwords/{password_profile['id']}/",
                headers={"Authorization": "JWT %s" % token},
            )
            if get_password_profiles.status_code == 200:
                print(
                    f"Password profile for site {password_profile['site']} and login {password_profile['login']} already exists. Skipping."
                )
            elif get_password_profiles.status_code == 404:
                create_password = requests.post(
                    f"{url}passwords/",
                    json=password_profile,
                    headers={"Authorization": "JWT %s" % token},
                )
                print(create_password.text)
                create_password.raise_for_status()
                print(
                    f"Password profile for site {password_profile['site']} and login {password_profile['login']} successfully imported."
                )
            else:
                get_password_profiles.raise_for_status()

    get_password_profiles = requests.get(
        f"{url}passwords/", headers={"Authorization": "JWT %s" % token}
    )
    with open(backup_path, "w", encoding="utf-8") as f:
        json.dump(get_password_profiles.json(), f, ensure_ascii=False, indent=4)


def export_passwords(config_home_path, url, export_file_path):
    master_password = getpass.getpass("Master Password: ")
    token = _login(config_home_path, url, master_password)
    r = requests.get(f"{url}passwords/", headers={"Authorization": "JWT %s" % token})
    r.raise_for_status()
    with open(export_file_path, "w", encoding="utf-8") as f:
        f.write("name,url,username,password\n")
        for password_profile in r.json()["results"]:
            password = generate_password(password_profile, master_password)
            print(f"{password_profile['site']} exported")
            f.write(
                f"{password_profile['site']},https://{password_profile['site']},{password_profile['login']},{password}\n"
            )
    print(
        f"Passwords exported in {export_file_path}. /!\ Be careful all your passwords are in clear text. "
    )
