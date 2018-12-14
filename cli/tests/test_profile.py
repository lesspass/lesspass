import unittest

from lesspass.cli import parse_args
from lesspass.profile import create_profile


class TestProfile(unittest.TestCase):
    def test_create_profile_default(self):
        profile, master_password = create_profile(parse_args(["site", "login"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])
        self.assertEqual(profile["length"], 16)
        self.assertEqual(profile["counter"], 1)
        self.assertEqual(profile["site"], "site")
        self.assertEqual(profile["login"], "login")
        self.assertIsNone(master_password)

    def test_create_profile_login(self):
        profile, _ = create_profile(parse_args(["site"]))
        self.assertEqual(profile["login"], "")

    def test_create_profile_length(self):
        profile, _ = create_profile(parse_args(["site", "--length", "8"]))
        self.assertEqual(profile["length"], 8)

    def test_create_profile_counter(self):
        profile, _ = create_profile(parse_args(["site", "--counter", "2"]))
        self.assertEqual(profile["counter"], 2)

    def test_create_profile_master_password(self):
        _, master_password = create_profile(
            parse_args(["site", "login", "master_password"])
        )
        self.assertEqual(master_password, "master_password")

    def test_create_profile_l(self):
        profile, _ = create_profile(parse_args(["site", "-l"]))
        self.assertTrue(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_u(self):
        profile, _ = create_profile(parse_args(["site", "-u"]))
        self.assertFalse(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_d(self):
        profile, _ = create_profile(parse_args(["site", "-d"]))
        self.assertFalse(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_s(self):
        profile, _ = create_profile(parse_args(["site", "-s"]))
        self.assertFalse(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_lu(self):
        profile, _ = create_profile(parse_args(["site", "-lu"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_ld(self):
        profile, _ = create_profile(parse_args(["site", "-ld"]))
        self.assertTrue(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_ls(self):
        profile, _ = create_profile(parse_args(["site", "-ls"]))
        self.assertTrue(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_ud(self):
        profile, _ = create_profile(parse_args(["site", "-ud"]))
        self.assertFalse(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_us(self):
        profile, _ = create_profile(parse_args(["site", "-us"]))
        self.assertFalse(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_ds(self):
        profile, _ = create_profile(parse_args(["site", "-ds"]))
        self.assertFalse(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_lud(self):
        profile, _ = create_profile(parse_args(["site", "-lud"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertFalse(profile["symbols"])

    def test_create_profile_lus(self):
        profile, _ = create_profile(parse_args(["site", "-lus"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_uds(self):
        profile, _ = create_profile(parse_args(["site", "-uds"]))
        self.assertFalse(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_luds(self):
        profile, _ = create_profile(parse_args(["site", "-luds"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_suld(self):
        profile, _ = create_profile(parse_args(["site", "-suld"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_nl(self):
        profile, _ = create_profile(parse_args(["site", "--no-lowercase"]))
        self.assertFalse(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_nu(self):
        profile, _ = create_profile(parse_args(["site", "--no-uppercase"]))
        self.assertTrue(profile["lowercase"])
        self.assertFalse(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_nd(self):
        profile, _ = create_profile(parse_args(["site", "--no-digits"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertFalse(profile["digits"])
        self.assertTrue(profile["symbols"])

    def test_create_profile_ns(self):
        profile, _ = create_profile(parse_args(["site", "--no-symbols"]))
        self.assertTrue(profile["lowercase"])
        self.assertTrue(profile["uppercase"])
        self.assertTrue(profile["digits"])
        self.assertFalse(profile["symbols"])
