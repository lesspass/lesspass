import unittest

from mock import patch

from lesspass.cli import parse_args


class TestParseArgs(unittest.TestCase):
    def test_parse_args_version(self):
        self.assertTrue(parse_args(["--version"]).version)
        self.assertTrue(parse_args(["-v"]).version)

    def test_parse_args_help(self):
        self.assertTrue(parse_args(["--help"]).help)
        self.assertTrue(parse_args(["-h"]).help)

    def test_parse_args_site(self):
        self.assertEqual(parse_args(["site"]).site, "site")

    def test_parse_args_login(self):
        self.assertEqual(parse_args(["site", "login"]).login, "login")

    def test_parse_args_LESSPASS_MASTER_PASSWORD_env_variable(self):
        with patch.dict("os.environ", {"LESSPASS_MASTER_PASSWORD": "password"}):
            self.assertEqual(parse_args([]).master_password, "password")

    def test_parse_args_master_password(self):
        self.assertEqual(
            parse_args(["site", "login", "masterpassword"]).master_password,
            "masterpassword",
        )

    def test_parse_args_l(self):
        self.assertTrue(parse_args(["site", "-l"]).l)
        self.assertTrue(parse_args(["site", "--lowercase"]).l)

    def test_parse_args_u(self):
        self.assertTrue(parse_args(["site", "-u"]).u)
        self.assertTrue(parse_args(["site", "--uppercase"]).u)

    def test_parse_args_d(self):
        self.assertTrue(parse_args(["site", "-d"]).d)
        self.assertTrue(parse_args(["site", "--digits"]).d)

    def test_parse_args_s(self):
        self.assertTrue(parse_args(["site", "-s"]).s)
        self.assertTrue(parse_args(["site", "--symbols"]).s)

    def test_parse_args_lu(self):
        args = parse_args(["site", "-lu"])
        self.assertTrue(args.l)
        self.assertTrue(args.u)
        self.assertFalse(args.d)
        self.assertFalse(args.s)

    def test_parse_args_lud(self):
        args = parse_args(["site", "-lud"])
        self.assertTrue(args.l)
        self.assertTrue(args.u)
        self.assertTrue(args.d)
        self.assertFalse(args.s)

    def test_parse_args_luds(self):
        args = parse_args(["site", "-luds"])
        self.assertTrue(args.l)
        self.assertTrue(args.u)
        self.assertTrue(args.d)
        self.assertTrue(args.s)

    def test_parse_args_no_lowercase(self):
        self.assertTrue(parse_args(["site", "--no-lowercase"]).nl)

    def test_parse_args_no_uppercase(self):
        self.assertTrue(parse_args(["site", "--no-uppercase"]).nu)

    def test_parse_args_no_digits(self):
        self.assertTrue(parse_args(["site", "--no-digits"]).nd)

    def test_parse_args_no_symbols(self):
        self.assertTrue(parse_args(["site", "--no-symbols"]).ns)

    def test_parse_args_length_default(self):
        self.assertEqual(parse_args(["site"]).length, 16)

    def test_parse_args_length_long(self):
        self.assertEqual(parse_args(["site", "--length", "8"]).length, 8)

    def test_parse_args_length_short(self):
        self.assertEqual(parse_args(["site", "-L6"]).length, 6)
        self.assertEqual(parse_args(["site", "-L", "12"]).length, 12)

    def test_parse_args_counter_default(self):
        self.assertEqual(parse_args(["site"]).counter, 1)

    def test_parse_args_counter_long(self):
        self.assertEqual(parse_args(["site", "--counter", "2"]).counter, 2)

    def test_parse_args_counter_short(self):
        self.assertEqual(parse_args(["site", "-C99"]).counter, 99)
        self.assertEqual(parse_args(["site", "-C", "100"]).counter, 100)

    def test_parse_args_clipboard_default(self):
        self.assertFalse(parse_args(["site"]).clipboard)

    def test_parse_args_clipboard_long(self):
        self.assertTrue(parse_args(["site", "--copy"]).clipboard)

    def test_parse_args_clipboard_short(self):
        self.assertTrue(parse_args(["site", "-c"]).clipboard)

    def test_parse_args_clipboard_backward_compatibility(self):
        self.assertTrue(parse_args(["site", "--clipboard"]).clipboard)

    def test_parse_args_prompt_long(self):
        self.assertTrue(parse_args(["--prompt"]).prompt)

    def test_parse_args_prompt_short(self):
        self.assertTrue(parse_args(["-p"]).prompt)
