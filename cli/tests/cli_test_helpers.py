import subprocess
import sys
from pathlib import Path

CORE_PY = Path(__file__).resolve().parent.parent / "lesspass" / "core.py"


def run_lesspass(*args, interactive=False, timeout=5):
    kwargs = {
        "args": [sys.executable, str(CORE_PY), *args],
        "stdout": subprocess.PIPE,
        "stderr": subprocess.PIPE,
        "cwd": CORE_PY.parent,
        "text": True,
    }

    if interactive:
        kwargs["stdin"] = subprocess.PIPE

        if sys.platform == "win32":
            kwargs["creationflags"] = (
                subprocess.CREATE_NEW_PROCESS_GROUP | subprocess.CREATE_NO_WINDOW
            )

    process = subprocess.Popen(**kwargs)

    if interactive:
        return process

    stdout, stderr = process.communicate(timeout=timeout)
    return stdout + stderr