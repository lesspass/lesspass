import unittest

from lesspass.password import generate_password
from lesspass import password


class TestPassword(unittest.TestCase):
    def test_generate_password(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": True,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "WHLpUL)e00[iHR+w"
        )

    def test_generate_password_2(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": False,
            "length": 14,
            "counter": 2,
        }
        master_password = "password"
        self.assertEqual(generate_password(profile, master_password), "MBAsB7b1Prt8Sl")

    def test_generate_password_3(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": False,
            "uppercase": False,
            "digits": True,
            "symbols": False,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "8742368585200667"
        )

    def test_generate_password_4(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": False,
            "symbols": True,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "s>{F}RwkN/-fmM.X"
        )

    def test_generate_password_nrt_328(self):
        profile = {
            "site": "site",
            "login": "login",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": True,
            "length": 16,
            "counter": 10,
        }
        master_password = "test"
        self.assertEqual(
            generate_password(profile, master_password), "XFt0F*,r619:+}[."
        )

    def test_calc_entropy(self):
        password_profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "counter": 1,
        }
        master_password = 'password'

        self.assertEqual(
            password._calc_entropy(password_profile, master_password), b'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e'
        )
