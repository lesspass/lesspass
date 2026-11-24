import io
import os
import unittest
from contextlib import redirect_stdout
from unittest.mock import patch

from lesspass.core import main
from .cli_test_helpers import run_lesspass

MASTER_PASSWORD = "passwor"
MNEMONIC = "🏨 🍴 🏁"


def env_without_master_password():
    env = {k: v for k, v in os.environ.items() if k != "LESSPASS_MASTER_PASSWORD"}
    return patch.dict("os.environ", env, clear=True)


class TestOnlyFingerprint(unittest.TestCase):
    def run_main(self, *args):
        stdout = io.StringIO()
        with redirect_stdout(stdout):
            main(list(args))
        return stdout.getvalue()

    def test_prints_fingerprint_of_prompted_master_password(self):
        with env_without_master_password(), patch(
            "lesspass.core.getpass_with_fingerprint", return_value=MASTER_PASSWORD
        ):
            self.assertEqual(self.run_main("--only-fingerprint"), MNEMONIC + "\n")

    def test_respects_no_fingerprint_when_prompting(self):
        with env_without_master_password(), patch(
            "lesspass.core.getpass.getpass", return_value=MASTER_PASSWORD
        ):
            output = self.run_main("--only-fingerprint", "--no-fingerprint")
        self.assertEqual(output, MNEMONIC + "\n")

    def test_does_not_compute_password(self):
        with patch("lesspass.core.generate_password") as generate_password:
            self.run_main("site", "login", MASTER_PASSWORD, "--only-fingerprint")
        generate_password.assert_not_called()

    def test_empty_master_password_exits_with_code_5(self):
        with env_without_master_password(), patch(
            "lesspass.core.getpass_with_fingerprint", return_value=""
        ), self.assertRaises(SystemExit) as context:
            self.run_main("--only-fingerprint")
        self.assertEqual(context.exception.code, 5)


class TestOnlyFingerprintFunctional(unittest.TestCase):
    def test_reads_master_password_from_env_without_site(self):
        with patch.dict("os.environ", {"LESSPASS_MASTER_PASSWORD": MASTER_PASSWORD}):
            output = run_lesspass("--only-fingerprint")
        self.assertEqual(output, MNEMONIC + "\n")

    def test_ignores_site_and_login(self):
        output = run_lesspass("site", "login", MASTER_PASSWORD, "--only-fingerprint")
        self.assertEqual(output, MNEMONIC + "\n")
