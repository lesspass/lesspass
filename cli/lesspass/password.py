# From an initial work from Maurits van der Schee
# https://github.com/mevdschee/lesspass.py
#
#  Copyright (C) 2017 Maurits van der Schee
#  Copyright (C) 2018 Guillaume Vincent
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.


import hashlib

from lesspass import exceptions

CHARACTER_SUBSETS = {
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "digits": "0123456789",
    "symbols": "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}


def _calc_entropy(password_profile, master_password):
    salt = (
        password_profile["site"]
        + password_profile["login"]
        + hex(password_profile["counter"])[2:]
    )
    hex_entropy = hashlib.pbkdf2_hmac(
        "sha256", master_password.encode("utf-8"), salt.encode("utf-8"), 100000, 32
    ).hex()
    return int(hex_entropy, 16)


def _remove_excluded_chars(string, exclude):
    new_string = "".join(c for c in string if c not in exclude)
    if len(new_string) == 0:
        raise exceptions.ExcludeAllCharsAvailable
    return new_string


def _get_set_of_characters(rules=None, exclude=""):
    if rules is None:
        return (
            CHARACTER_SUBSETS["lowercase"]
            + CHARACTER_SUBSETS["uppercase"]
            + CHARACTER_SUBSETS["digits"]
            + CHARACTER_SUBSETS["symbols"]
        )
    pool_of_chars = ""
    for rule in rules:
        pool_of_chars += CHARACTER_SUBSETS[rule]
    return _remove_excluded_chars(pool_of_chars, exclude)


def _consume_entropy(generated_password, quotient, set_of_characters, max_length):
    if len(generated_password) >= max_length:
        return [generated_password, quotient]
    quotient, remainder = divmod(quotient, len(set_of_characters))
    generated_password += set_of_characters[remainder]
    return _consume_entropy(generated_password, quotient, set_of_characters, max_length)


def _insert_string_pseudo_randomly(generated_password, entropy, string):
    for letter in string:
        quotient, remainder = divmod(entropy, len(generated_password))
        generated_password = (
            generated_password[:remainder] + letter + generated_password[remainder:]
        )
        entropy = quotient
    return generated_password


def _get_one_char_per_rule(entropy, rules, exclude=""):
    one_char_per_rules = ""
    for rule in rules:
        available_chars = _remove_excluded_chars(CHARACTER_SUBSETS[rule], exclude)
        value, entropy = _consume_entropy("", entropy, available_chars, 1)
        one_char_per_rules += value
    return [one_char_per_rules, entropy]


def _get_configured_rules(password_profile):
    rules = ["lowercase", "uppercase", "digits", "symbols"]
    if "numbers" in password_profile:
        password_profile["digits"] = password_profile["numbers"]
    return [
        rule for rule in rules if rule in password_profile and password_profile[rule]
    ]


def _render_password(entropy, password_profile):
    rules = _get_configured_rules(password_profile)
    excluded_chars = (
        password_profile["exclude"] if "exclude" in password_profile else ""
    )
    set_of_characters = _get_set_of_characters(rules, excluded_chars)
    password, password_entropy = _consume_entropy(
        "", entropy, set_of_characters, password_profile["length"] - len(rules)
    )
    characters_to_add, character_entropy = _get_one_char_per_rule(
        password_entropy, rules, excluded_chars
    )
    return _insert_string_pseudo_randomly(
        password, character_entropy, characters_to_add
    )


def generate_password(password_profile, master_password):
    entropy = _calc_entropy(password_profile, master_password)
    return _render_password(entropy, password_profile)
