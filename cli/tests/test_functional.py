import unittest
import pexpect
import signal
import time

import sys

import argparse
from lesspass.cli import range_type

class TestFunctional(unittest.TestCase):
    def test_length_below_the_minimum(self):
        p = pexpect.spawn(
            "python3 lesspass/core.py  site login masterpassword --lowercase --digits --length 2"
        )
        output = p.read().decode()

        self.assertTrue("error: argument -L/--length: 2 is out of range, choose in [5-35]" in output)

    def test_length_range_type(self):
        self.assertEqual(range_type('5'), 5)
        self.assertEqual(range_type('35'), 35) 
        with self.assertRaises(argparse.ArgumentTypeError):
            range_type('2')