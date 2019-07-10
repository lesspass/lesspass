import hmac
import hashlib
import sys
import os
import random
import tty
import termios

if os.name == "nt":
    import msvcrt

basic_text_colors = [
    "\x1b[37;40m",  # black               #000000
    "\x1b[30;46m",  # dark cyan           #074750
    "\x1b[30;46m",  # mid cyan            #009191
    "\x1b[30;45m",  # bright pink         #FF6CB6
    "\x1b[30;45m",  # cotton candy pink   #FFB5DA
    "\x1b[30;45m",  # mid purple          #490092
    "\x1b[30;44m",  # sky blue            #006CDB
    "\x1b[30;45m",  # lavendar            #B66DFF
    "\x1b[30;44m",  # baby blue           #6DB5FE
    "\x1b[30;44m",  # white blue          #B5DAFE
    "\x1b[30;41m",  # blood red           #920000
    "\x1b[30;41m",  # burnt orange        #924900
    "\x1b[30;43m",  # orange              #DB6D00
    "\x1b[30;42m",  # lime green          #24FE23
]
icons = [
    "hashtag",
    "heart",
    "hotel",
    "university",
    "plug",
    "ambulance",
    "bus",
    "car",
    "plane",
    "rocket",
    "ship",
    "subway",
    "truck",
    "japanese yen",
    "euro",
    "bitcoin",
    "U.S. dollar",
    "British pound",
    "archive",
    "area-chart",
    "bed",
    "beer",
    "bell",
    "binoculars",
    "birthday-cake",
    "bomb",
    "briefcase",
    "bug",
    "camera",
    "cart-plus",
    "certificate",
    "coffee",
    "cloud",
    "coffee",
    "comment",
    "cube",
    "cutlery",
    "database",
    "diamond",
    "exclamation-circle",
    "eye",
    "flag",
    "flask",
    "futbol",
    "gamepad",
    "graduation-cap",
]
MAX_ICON_WIDTH = max([len(icon) for icon in icons])


def get_list_entry(hash_slice, lookup_list):
    index = int(hash_slice, base=16) % len(lookup_list)
    return lookup_list[index]


def get_color(hash_slice):
    return get_list_entry(hash_slice, basic_text_colors)


def get_icon(hash_slice):
    return get_list_entry(hash_slice, icons)


def get_fingerprint(hmac_sha256):
    hash1, hash2, hash3 = hmac_sha256[0:6], hmac_sha256[6:12], hmac_sha256[12:18]
    fingerprint = []
    fingerprint.append({"color": get_color(hash1), "icon": get_icon(hash1)})
    fingerprint.append({"color": get_color(hash2), "icon": get_icon(hash2)})
    fingerprint.append({"color": get_color(hash3), "icon": get_icon(hash3)})
    return fingerprint


def get_hmac_sha256(password_bytes):
    return hmac.new(password_bytes, digestmod=hashlib.sha256).hexdigest()


def get_fixed_width_text(fingerprint_entry):
    color, icon = fingerprint_entry["color"], fingerprint_entry["icon"]
    return f"{color}{icon}{' '*(MAX_ICON_WIDTH-len(icon))}\x1b[0m"


def get_mnemonic(password):
    fingerprint = get_fingerprint(get_hmac_sha256(password.encode("utf-8")))
    return (
        f"{get_fixed_width_text(fingerprint[0])} "
        f"{get_fixed_width_text(fingerprint[1])} "
        f"{get_fixed_width_text(fingerprint[2])}"
    )


def get_fake_mnemonic():
    fake_password = "".join(
        chr(random.randrange(ord("a"), ord("z") + 1)) for i in range(16)
    )
    return get_mnemonic(fake_password)


def getchar():
    # Returns a single character from standard input
    # Credit for this function: (not written by file author)
    # jasonrdsouza & mvaganov https://gist.github.com/jasonrdsouza/1901709
    ch = ""
    if os.name == "nt":  # Windows
        ch = msvcrt.getch()
    else:
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(sys.stdin.fileno())
            ch = sys.stdin.read(1)
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    if ord(ch) == 3:  # handle ctrl+C
        sys.stdout.write("\n")
        quit()
    return ch


def getpass_with_visual_fingerprint(prompt):
    sys.stdout.write(prompt)
    sys.stdout.flush()
    password = ""
    while True:
        c = getchar()
        if c == "\r":
            sys.stdout.write(f"\r{prompt}{get_mnemonic(password)}")
            c = getchar()
            if c == "\r":
                sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}\n")
                break
            elif c == "\x7f":  # backspace
                password = password[:-1]
            else:
                password = ""
        elif c == "\x7f":  # backspace
            password = password[:-1]
        else:
            password += c
        if len(password) != 0:
            sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}")
        else:
            sys.stdout.write(f"\r{prompt}  {' '*MAX_ICON_WIDTH*3}")
    return password


if __name__ == "__main__":
    getpass_with_visual_fingerprint("Master password: ")
