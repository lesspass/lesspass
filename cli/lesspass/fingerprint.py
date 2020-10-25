import hmac
import hashlib
import sys
import os
import random
import threading

if os.name == "nt":
    import msvcrt
else:
    import tty
    import termios


icon_names = [
    ["fa-hashtag", "#️"],
    ["fa-heart", "❤️"],
    ["fa-hotel", "🏨"],
    ["fa-university", "🎓"],
    ["fa-plug", "🔌"],
    ["fa-ambulance", "🚑"],
    ["fa-bus", "🚌"],
    ["fa-car", "🚗"],
    ["fa-plane", "✈️"],
    ["fa-rocket", "🚀"],
    ["fa-ship", "🚢"],
    ["fa-subway", "🚇"],
    ["fa-truck", "🚚"],
    ["fa-jpy", "💴"],
    ["fa-eur", "💶"],
    ["fa-btc", "₿"],
    ["fa-usd", "💵"],
    ["fa-gbp", "💷"],
    ["fa-archive", "🗄️"],
    ["fa-area-chart", "📈"],
    ["fa-bed", "🛏️"],
    ["fa-beer", "🍺"],
    ["fa-bell", "🔔"],
    ["fa-binoculars", "🔭"],
    ["fa-birthday-cake", "🎂"],
    ["fa-bomb", "💣"],
    ["fa-briefcase", "💼"],
    ["fa-bug", "🐛"],
    ["fa-camera", "📷"],
    ["fa-cart-plus", "🛒"],
    ["fa-certificate", "⭐"],
    ["fa-coffee", "☕"],
    ["fa-cloud", "☁️"],
    ["fa-coffee", "☕"],
    ["fa-comment", "🗨️"],
    ["fa-cube", "📦"],
    ["fa-cutlery", "🍴"],
    ["fa-database", "🖥️"],
    ["fa-diamond", "💎"],
    ["fa-exclamation-circle", "❗"],
    ["fa-eye", "👁️"],
    ["fa-flag", "🏁"],
    ["fa-flask", "⚗️"],
    ["fa-futbol-o", "⚽"],
    ["fa-gamepad", "🎮"],
    ["fa-graduation-cap", "🎓"],
]


MAX_ICON_WIDTH = max([len(icon) for icon in icon_names])


def get_icon_name(hash_slice):
    index = int(hash_slice, base=16) % len(icon_names)
    return icon_names[index][1]


def get_fingerprint(hmac_sha256):
    hash1, hash2, hash3 = hmac_sha256[0:6], hmac_sha256[6:12], hmac_sha256[12:18]
    fingerprint = []
    fingerprint.append(get_icon_name(hash1))
    fingerprint.append(get_icon_name(hash2))
    fingerprint.append(get_icon_name(hash3))
    return fingerprint


def get_hmac_sha256(password_bytes):
    return hmac.new(password_bytes, digestmod=hashlib.sha256).hexdigest()


def get_mnemonic(password):
    fingerprint = get_fingerprint(get_hmac_sha256(password.encode("utf-8")))
    return "{fingerprint_1} {fingerprint_2} {fingerprint_3}".format(
        fingerprint_1=fingerprint[0],
        fingerprint_2=fingerprint[1],
        fingerprint_3=fingerprint[2],
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
        ch = msvcrt.getwch()
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


def getpass_with_fingerprint(prompt):
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
    getpass_with_fingerprint("Master password: ")
