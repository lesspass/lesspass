import os
import platform
import shutil
import subprocess
import uuid


def _call(args):
    return subprocess.call(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def _copy_available(command):
    if platform.system() == "Windows":
        return _call(["where", command]) == 0
    return shutil.which(command) is not None


def get_system_copy_command():
    if platform.system() == "Windows" and _copy_available("clip"):
        return "clip"

    if platform.system() == "Darwin" and _copy_available("pbcopy"):
        return "pbcopy"

    if os.getenv("WAYLAND_DISPLAY") is not None and _copy_available("wl-copy"):
        return "wl-copy"

    for command in ["xsel", "xclip", "termux-clipboard-set"]:
        if _copy_available(command):
            return command


def _popen(args, **kwargs):
    return subprocess.Popen(args, stdin=subprocess.PIPE)


commands = {
    "clip": ["clip"],
    "pbcopy": ["pbcopy"],
    "wl-copy": ["wl-copy"],
    "xsel": ["xsel", "--clipboard", "--input"],
    "xclip": ["xclip", "-selection", "clipboard"],
    "termux-clipboard-set": ["termux-clipboard-set"],
}


def copy(text):
    command = get_system_copy_command()
    if command is None:
        raise (Exception("No software available on your system to copy to clipboard"))
    args = commands[command]
    if platform.system() == "Windows":
        p = _popen(args)
    else:
        p = _popen(args, close_fds=True)
    p.communicate(input=text.encode('ascii'))
