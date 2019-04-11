import argparse


class Range(argparse.Action):
    def __init__(self, min=None, max=None, *args, **kwargs):
        self.min = min
        self.max = max
        kwargs["metavar"] = "[%d-%d]" % (self.min, self.max)
        super(Range, self).__init__(*args, **kwargs)

    def __call__(self, parser, namespace, value, option_string=None):
        if not (self.min <= value <= self.max):
            msg = "invalid choice: %r (choose from %d to %d)" % (
                value,
                self.min,
                self.max,
            )
            raise argparse.ArgumentError(self, msg)
        setattr(namespace, self.dest, value)
