import unittest
import pexpect
import signal
import time

class TestInteraction(unittest.TestCase):
    def test_keyboard_interrupt(self):

        p = pexpect.spawn('/bin/bash -c "python lesspass/core.py --prompt"')
        time.sleep(1)

        p.kill(signal.SIGINT)
        p.expect(pexpect.EOF)

        self.assertEqual(p.before, b'Site: ')
