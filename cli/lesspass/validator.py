from lesspass.clipboard import get_system_copy_command


class NoOppositeRules(object):
    def __init__(self, args):
        self.args = args
        self.error_message = ""

    def is_valid(self):
        is_valid = True
        if self.args.l and self.args.nl:
            self.error_message += (
                " * Can't have -l (--lowercase) and --no-lowercase at the same time"
            )
            is_valid = False
        if self.args.u and self.args.nu:
            self.error_message += (
                " * Can't have -u (--uppercase) and --no-uppercase at the same time"
            )
            is_valid = False
        if self.args.d and self.args.nd:
            self.error_message += (
                " * Can't have -d (--digits) and --no-digits at the same time"
            )
            is_valid = False
        if self.args.s and self.args.ns:
            self.error_message += (
                " * Can't have -s (--symbols) and --no-symbols at the same time"
            )
            is_valid = False
        return is_valid


class DefaultParameters(object):
    def __init__(self, args):
        self.args = args
        self.error_message = ""

    def is_valid(self):
        is_valid = True
        if not self.args.site and not self.args.prompt:
            self.error_message += " * SITE is a required argument (unless in interactive mode with --prompt)"
            is_valid = False
        return is_valid


class ClipboardAvailable(object):
    def __init__(self, args):
        self.args = args
        self.error_message = ""

    def is_valid(self):
        is_valid = True
        if self.args.clipboard and not get_system_copy_command():
            self.error_message += " * To use the option -c (--copy) you need pbcopy on OSX, xsel or xclip on Linux and clip on Windows"
            is_valid = False
        return is_valid


def validate_args(args):
    rules = [NoOppositeRules(args), DefaultParameters(args), ClipboardAvailable(args)]
    error = False
    error_message = ""
    for rule in rules:
        if not rule.is_valid():
            error = True
            error_message += "%s\n" % rule.error_message
    return error, error_message
