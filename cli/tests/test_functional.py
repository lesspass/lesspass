import unittest
import pexpect


import argparse
from lesspass.cli import range_type


class TestFunctional(unittest.TestCase):
    def test_length_below_the_minimum(self):
        p = pexpect.spawn(
            "python3 lesspass/core.py  site login masterpassword --lowercase --digits --length 2"
        )
        output = p.read().decode()

        self.assertTrue(
            "error: argument -L/--length: 2 is out of range, choose in [5-35]" in output
        )

    def test_length_range_type(self):
        self.assertEqual(range_type("5"), 5)
        self.assertEqual(range_type("35"), 35)
        with self.assertRaises(argparse.ArgumentTypeError):
            range_type("2")

    def test_exclude(self):
        p = pexpect.spawn(
            'python3 lesspass/core.py  site login masterpassword --exclude "!@$*+-8"'
        )
        output = p.read().decode()
        for c in "!@$*+-8":
            self.assertTrue(c not in output)

    def test_exclude(self):
        p = pexpect.spawn(
            'python3 lesspass/core.py  site login masterpassword -d -L6 --exclude "0123456789"'
        )
        output = p.read().decode()

        self.assertTrue("error: you can't exclude all chars available" in output)
