import unittest

from lesspass.fingerprint import get_mnemonic


class TestFingerprint(unittest.TestCase):
    def test_get_fingerprint(self):
        self.assertEqual(get_mnemonic("passwor"), "🏨 🍴 🏁")
        self.assertEqual(get_mnemonic("Password12345"), "🚑 🛏️ 💷")
        self.assertEqual(get_mnemonic("Ma$$W0rld!@#$%^&*()<gamma>"), "📈 💷 💷")
