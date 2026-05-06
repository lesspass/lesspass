import unittest
import subprocess
import signal
import sys
from .cli_test_helpers import run_lesspass


class TestInteraction(unittest.TestCase):
    def test_keyboard_interrupt(self):
        
        p = run_lesspass("--prompt", interactive=True)

        if sys.platform == "win32":
            p.send_signal(signal.CTRL_C_EVENT)
        else:
            p.send_signal(signal.SIGINT)

        try:
            stdout, stderr = p.communicate(timeout=2)
        except subprocess.TimeoutExpired:
            p.kill()
            stdout, stderr = p.communicate()

        self.assertEqual(stdout, b"")
