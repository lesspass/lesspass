import unittest
import argparse
from .cli_test_helpers import run_lesspass
from lesspass.cli import range_type


class TestRangeType(unittest.TestCase):
    def test_valid_values(self):
        self.assertEqual(range_type("5"), 5)
        self.assertEqual(range_type("35"), 35)

    def test_below_minimum_raises(self):
        with self.assertRaises(argparse.ArgumentTypeError):
            range_type("2")

class TestFunctional(unittest.TestCase):

    def test_length_below_the_minimum(self):
        output = run_lesspass(
            "site", "login", "masterpassword",
            "--lowercase", "--digits", "--length", "2",
        )
        self.assertIn(
            "error: argument -L/--length: 2 is out of range, choose in [5-35]",
            output,
        )

    def test_exclude_given_chars_from_output(self):
        output = run_lesspass(
            "site", "login", "masterpassword", "--exclude", "!@$*+-8",
        )
        for c in "!@$*+-8":
            self.assertNotIn(c, output)

    def test_exclude_all_chars_raise_error(self):
        output = run_lesspass(
            "site", "login", "masterpassword",
            "-d", "-L6", "--exclude", "0123456789",
        )
        self.assertIn("error: you can't exclude all chars available", output)

    def test_master_password_too_short(self):
        output = run_lesspass("site", "login", "foo")
        self.assertIn(
            "warning: master password is short, consider using at least 10 characters",
            output,
        )
