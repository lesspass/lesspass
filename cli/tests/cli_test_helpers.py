import subprocess
import sys
from pathlib import Path


CORE_PY = Path(__file__).resolve().parent.parent / "lesspass" / "core.py"

def run_lesspass(*args, interactive=False):
    kwargs = dict(
        args = [sys.executable, str(CORE_PY), *args],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        cwd=CORE_PY.parent
    )

    if interactive :
        kwargs["stdin"]=subprocess.PIPE
        if sys.platform == "win32":
            kwargs["creationflags"] = (
                subprocess.CREATE_NEW_PROCESS_GROUP |
                subprocess.CREATE_NO_WINDOW
            )
        return subprocess.Popen(**kwargs)
    
    result = subprocess.run(**kwargs, text=True, timeout=5)
    return result.stdout + result.stderr