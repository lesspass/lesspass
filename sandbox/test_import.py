import unittest
from secrets import token_hex
from lesspass import password


def get_pool_of_char(password_profile):
    return "abcdefghijklmnopqrstuvwxyz"


def get_rules(password_profile):
    return ["lowercase"]


def get_rule_len(rule):
    return 26


def generate_random_entropy():
    return int(token_hex(32), 16)


def _rev_pseudo_insert_chars_to_add(entropy, old_password):
    rules = get_rules(old_password)
    chars_to_add = []
    for rule in rules:
        position = 0
        chars_to_add.append((old_password[0], rule,))
        old_password = old_password[1:]
        entropy = (entropy + 0) * len(old_password)
    return chars_to_add, old_password, entropy


def _rev_chars_to_add(chars_to_add, entropy, pool_of_char):
    for char, rule in chars_to_add:
        entropy = entropy * get_rule_len(rule) + pool_of_char.find(char)
    return entropy


def _rev_consume_entropy(old_password, entropy, pool_of_char):
    while len(old_password) != 0:
        last_char = old_password[-1]
        old_password = old_password[:-1]
        entropy = entropy * len(pool_of_char) + pool_of_char.find(last_char)
    return entropy


def reverse_entropy(old_password, password_profile):
    entropy = generate_random_entropy()
    e1 = entropy
    rules = get_rules(old_password)
    one_char_per_rule = []
    for rule in rules:
        position = 0
        one_char_per_rule.append((old_password[0], rule,))
        old_password = old_password[1:]
        entropy = (entropy + 0) * len(old_password)

    pool_of_char = get_pool_of_char(old_password)
    for char, rule in one_char_per_rule:
        entropy = entropy * get_rule_len(rule) + pool_of_char.find(char)

    while old_password != "":
        last_char = old_password[-1]
        old_password = old_password[:-1]
        entropy = entropy * len(pool_of_char) + pool_of_char.find(last_char)

    return entropy


class TestImportPOC(unittest.TestCase):
    def test_can_reverse_entropy(self):
        password_profile = {
            "site": "lesspass.com",
            "login": "contact@lesspass.com",
            "lowercase": True,
            "uppercase": False,
            "digits": False,
            "symbols": False,
            "length": 11,
            "counter": 1,
        }
        master_password = "password"
        entropy = password._calc_entropy(password_profile, master_password)
        old_entropy = reverse_entropy("oldpassword", password_profile)
        oldpassword = password._render_password(old_entropy, password_profile)
        self.assertEqual(oldpassword, "oldpassword")
