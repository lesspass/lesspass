import hmac
import hashlib
import sys
import os
import random
import tty
import termios
import threading

if os.name == "nt":
    import msvcrt


def user_has_icons_in_terminal():
    return os.path.exists(os.path.expanduser("~/.fonts/icons-in-terminal.ttf"))


colors_256 = [
    "\x1b[38;5;248m",  # black               #000000
    "\x1b[38;5;30m",  # dark cyan           #074750
    "\x1b[38;5;37m",  # mid cyan            #009191
    "\x1b[38;5;211m",  # bright pink         #FF6CB6
    "\x1b[38;5;219m",  # cotton candy pink   #FFB5DA
    "\x1b[38;5;55m",  # mid purple          #490092
    "\x1b[38;5;69m",  # sky blue            #006CDB
    "\x1b[38;5;140m",  # lavendar            #B66DFF
    "\x1b[38;5;81m",  # baby blue           #6DB5FE
    "\x1b[38;5;153m",  # white blue          #B5DAFE
    "\x1b[38;5;88m",  # blood red           #920000
    "\x1b[38;5;94m",  # burnt orange        #924900
    "\x1b[38;5;172m",  # orange              #DB6D00
    "\x1b[38;5;82m",  # lime green          #24FE23
]
unicode_colors = [
    "\x1b[31;40m",  # black               #000000
    "\x1b[36;40m",  # dark cyan           #074750
    "\x1b[36;40m",  # mid cyan            #009191
    "\x1b[35;40m",  # bright pink         #FF6CB6
    "\x1b[35;40m",  # cotton candy pink   #FFB5DA
    "\x1b[35;40m",  # mid purple          #490092
    "\x1b[34;40m",  # sky blue            #006CDB
    "\x1b[35;40m",  # lavendar            #B66DFF
    "\x1b[34;40m",  # baby blue           #6DB5FE
    "\x1b[34;40m",  # white blue          #B5DAFE
    "\x1b[31;40m",  # blood red           #920000
    "\x1b[31;40m",  # burnt orange        #924900
    "\x1b[33;40m",  # orange              #DB6D00
    "\x1b[32;40m",  # lime green          #24FE23
]
fallback_colors = [
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
icon_names = [
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
icons_in_terminal_icons = {
    "hashtag": "\ue33e",
    "heart": "\ue0e5",
    "hotel": "\ue268",  # NOTE: "fa-building" substituted
    "university": "\ue644",
    "plug": "\ue29d",
    "ambulance": "\ue1bf",
    "bus": "\ue2bc",
    "car": "\ue587",
    "plane": "\ue14c",
    "rocket": "\ue1f7",
    "ship": "\ue2ce",
    "subway": "\ue2eb",
    "truck": "\ue199",
    "japanese yen": "\uec97",  # NOTE: Linea circled yen icon substituted
    "euro": "\ue714",
    "bitcoin": "\ue21a",
    "U.S. dollar": "\ue215",
    "British pound": "\uec89",  # NOTE: Linea circled pound sterling icon substituted
    "archive": "\ue244",
    "area-chart": "\ue2b4",
    "bed": "\ue2e8",
    "beer": "\ue1c2",
    "bell": "\ue1b9",
    "binoculars": "\ue29c",
    "birthday-cake": "\ue2b3",
    "bomb": "\ue299",
    "briefcase": "\ue187",
    "bug": "\ue245",
    "camera": "\ue10e",
    "cart-plus": "\ue2cb",
    "certificate": "\ue17a",
    "coffee": "\ue1ba",
    "cloud": "\ue18b",
    "comment": "\ue14f",
    "cube": "\ue26c",
    "cutlery": "\ue1bb",
    "database": "\ue279",
    "diamond": "\ue2cd",
    "exclamation-circle": "\ue145",
    "eye": "\ue149",
    "flag": "\ue102",
    "flask": "\ue18c",
    "futbol": "\ue29a",
    "gamepad": "\ue1df",
    "graduation-cap": "\ue259",
}


MAX_ICON_WIDTH = max([len(icon) for icon in icon_names])


def get_list_entry(hash_slice, lookup_list):
    index = int(hash_slice, base=16) % len(lookup_list)
    return lookup_list[index]


def get_color(hash_slice):
    if user_has_icons_in_terminal():
        if "256" in os.environ["TERM"]:
            colors = colors_256
        else:
            colors = unicode_colors
    else:
        colors = fallback_colors
    return get_list_entry(hash_slice, colors)


def get_icon(hash_slice):
    icon_name = get_list_entry(hash_slice, icon_names)
    return (
        icons_in_terminal_icons[icon_name]
        if user_has_icons_in_terminal()
        else icon_name
    )


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
    if user_has_icons_in_terminal():
        text = f"{color}{icon} \x1b[0m"
    else:
        text = f"{color}{icon}{' '*(MAX_ICON_WIDTH-len(icon))}\x1b[0m"
    return text


def get_mnemonic(password):
    fingerprint = get_fingerprint(get_hmac_sha256(password.encode("utf-8")))
    return (
        f"[ {get_fixed_width_text(fingerprint[0])} "
        f"{get_fixed_width_text(fingerprint[1])} "
        f"{get_fixed_width_text(fingerprint[2])} ]"
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
    global semaphore
    global stdout_lock

    sys.stdout.write(prompt)
    sys.stdout.flush()
    password = ""
    delayed_write = None
    while True:
        c = getchar()
        if delayed_write:
            delayed_write.cancel()
        if c == "\r":
            sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}\n")
            break
        elif c == "\x7f":  # backspace
            password = password[:-1]
        else:
            password += c
        if len(password) != 0:
            delayed_write = threading.Timer(
                0.5, lambda: sys.stdout.write(f"\r{prompt}{get_mnemonic(password)}")
            )
            delayed_write.start()
            sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}")
        else:
            sys.stdout.write(f"\r{prompt}{' '*(MAX_ICON_WIDTH*3)}")
    return password


if __name__ == "__main__":
    getpass_with_visual_fingerprint("Master password: ")
