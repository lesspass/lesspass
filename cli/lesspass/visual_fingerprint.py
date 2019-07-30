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


def user_has_unifont():
    # TODO: actual implementation of this
    return False


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
icons_unicode = {
    "hashtag": "\u0023",
    "heart": "\u2665",
    "hotel": "\u1F3E8",
    "university": "\u1F3DB",
    "plug": "\u1F50C",
    "ambulance": "\u1F691",
    "bus": "\u1F68C",
    "car": "\u1F697",
    "plane": "\u2708",
    "rocket": "\u1F680",
    "ship": "\u1F6A2",
    "subway": "\u1F687",
    "truck": "\u26DF",
    "japanese yen": "\u00A5",
    "euro": "\u20AC",
    "bitcoin": "\u20BF",
    "U.S. dollar": "\u0024",
    "British pound": "\u00A3",
    "archive": "\u1F5C3",
    "area-chart": "\u1F4C8",
    "bed": "\u1F6CF",
    "beer": "\u1F37A",
    "bell": "\u1F514",
    "binoculars": "\u1F52D",  # NOTE: "Telescope" substituted
    "birthday-cake": "\u1F382",
    "bomb": "\u1F4A3",
    "briefcase": "\u1F4BC",
    "bug": "\u1F41B",
    "camera": "\u1F4F7",
    "cart-plus": "\u1F6D2",  # NOTE: "Shopping Trolley" substituted
    "certificate": "\u1F7D3",  # NOTE: "Heavy Tweleve Pointed Black Star" substituted
    "coffee": "\u2615",
    "cloud": "\u2601",
    "comment": "\u1F5E9",
    "cube": "\u1F4E6",  # NOTE: "Package" subtituted
    "cutlery": "\u1F374",
    "database": "\u26C1",
    "diamond": "\u25C6",
    "exclamation-circle": "\u2757",  # NOTE: "Heavy Exclamation Mark" substituted
    "eye": "\u1F441",
    "flag": "\u2691",
    "flask": "\u1F376",  # NOTE: "Sake Bottle and Cup" subtituted
    "futbol": "\u26BD",
    "gamepad": "\u1F3AE",
    "graduation-cap": "\u1F393",
}
MAX_ICON_WIDTH = max([len(icon) for icon in icons])


def get_list_entry(hash_slice, lookup_list):
    index = int(hash_slice, base=16) % len(lookup_list)
    return lookup_list[index]


def get_color(hash_slice):
    return get_list_entry(
        hash_slice, unicode_colors if user_has_unifont() else fallback_colors
    )


def get_icon(hash_slice):
    icon_name = get_list_entry(hash_slice, icons)
    return icons_unicode[icon_name] if user_has_unifont() else icon_name


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
    if user_has_unifont():
        text = f"[{color}{icon}{' '*(2-len(icon))}\x1b[0m]"
    else:
        text = f"{color}{icon}{' '*(MAX_ICON_WIDTH-len(icon))}\x1b[0m"
    return text


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
            sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}{' '*3}\n")
            break
        elif c == "\x7f":  # backspace
            password = password[:-1]
        else:
            password += c
        if len(password) != 0:
            delayed_write = threading.Timer(
                0.5,
                lambda: sys.stdout.write(f"\r{prompt}{get_mnemonic(password)}{' '*3}"),
            )
            delayed_write.start()
            sys.stdout.write(f"\r{prompt}{get_fake_mnemonic()}{' '*3}")
        else:
            sys.stdout.write(f"\r{prompt}{' '*((MAX_ICON_WIDTH*3)+3)}")
    return password


if __name__ == "__main__":
    getpass_with_visual_fingerprint("Master password: ")
