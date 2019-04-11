import unittest
import pexpect
import signal
import time

import sys


class TestFunctional(unittest.TestCase):
    def test_length_below_the_minimum(self):
        p = pexpect.spawn(
            "python3 lesspass/core.py  site login masterpassword --lowercase --digits --length 2"
        )
        self.assertTrue(
            "error: argument -L/--length: invalid choice: 2" in str(p.read())
        )
