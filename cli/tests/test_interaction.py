import unittest
import subprocess
import signal
import sys
from pathlib import Path

# Path to core.py, anchored to this file's location so tests run from any directory
CORE_PY = Path(__file__).resolve().parent.parent / "lesspass" / "core.py"

class TestInteraction(unittest.TestCase):
    def test_keyboard_interrupt(self):
        kwargs = {}
        if sys.platform == "win32":
            kwargs["creationflags"] = (
                subprocess.CREATE_NEW_PROCESS_GROUP |
                subprocess.CREATE_NO_WINDOW
            )

        p = subprocess.Popen(
            [sys.executable, str(CORE_PY), "--prompt"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            stdin=subprocess.PIPE,
            cwd=CORE_PY.parent,
            **kwargs,
        )

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
