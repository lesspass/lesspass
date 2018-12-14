import unittest

from lesspass.cli import parse_args
from lesspass.validator import validate_args


class TestValidateArgs(unittest.TestCase):
    def test_validate_args_no_opposite_rules_lowercase(self):
        error, message = validate_args(parse_args(["site", "-l", "--no-lowercase"]))
        self.assertTrue(error)
        self.assertTrue(
            "Can't have -l (--lowercase) and --no-lowercase at the same time" in message
        )

    def test_validate_args_no_opposite_rules_uppercase(self):
        error, message = validate_args(parse_args(["site", "-u", "--no-uppercase"]))
        self.assertTrue(error)
        self.assertTrue(
            "Can't have -u (--uppercase) and --no-uppercase at the same time" in message
        )

    def test_validate_args_no_opposite_rules_digits(self):
        error, message = validate_args(parse_args(["site", "-d", "--no-digits"]))
        self.assertTrue(error)
        self.assertTrue(
            "Can't have -d (--digits) and --no-digits at the same time" in message
        )

    def test_validate_args_no_opposite_rules_symbols(self):
        error, message = validate_args(parse_args(["site", "-s", "--no-symbols"]))
        self.assertTrue(error)
        self.assertTrue(
            "Can't have -s (--symbols) and --no-symbols at the same time" in message
        )

    def test_validate_args_concat_errors(self):
        _, message = validate_args(
            parse_args(["site", "-u", "--no-uppercase", "-l", "--no-lowercase"])
        )
        self.assertTrue(
            "Can't have -l (--lowercase) and --no-lowercase at the same time" in message
        )
        self.assertTrue(
            "Can't have -u (--uppercase) and --no-uppercase at the same time" in message
        )

    def test_validate_args_no_site(self):
        error, message = validate_args(parse_args([]))
        self.assertTrue(error)
        self.assertTrue(
            "SITE is a required argument" in message
        )
