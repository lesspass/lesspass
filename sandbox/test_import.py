from secrets import token_hex
from lesspass import password


def generate_random_entropy():
    return int(token_hex(32), 16)


CHARACTER_SUBSETS = {
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "digits": "0123456789",
    "symbols": "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}


def reverse_entropy(entropy, remainder, modulo):
    return entropy - modulo - remainder


def remove_at(i, s):
    return s[:i] + s[i + 1 :]


def get_rule_len(rule):
    if rule == "lowercase":
        return 26
    if rule == "digits":
        return 10


rules = [
    "lowercase",
    "digits",
]
old_password = "bar4"
chars_remaining = "%s" % old_password
one_char_per_rule = []
for rule in reversed(rules):
    for i, c in enumerate(old_password):
        print(f"char {c} index {i}")
        rule_pool = CHARACTER_SUBSETS[rule]
        if c in rule_pool:
            print(f"{c} in {rule_pool}")
            char_per_rule = (c, rule, i)
            print(char_per_rule)
            one_char_per_rule.append(char_per_rule)
            chars_remaining = remove_at(i, chars_remaining)
            break
        else:
            print(f"{c} not in {rule_pool}. skipping")
            pass
    print("-------")


print("chars to insert:", one_char_per_rule)

entropy = 654762009171870546215294809657
j = 7
print(f"e{j}:", entropy)
j -= 1
for i, rule in enumerate(one_char_per_rule):
    print(f"e * ({len(old_password) - i - 1}) + {rule[2]}")
    entropy = entropy * (len(old_password) - i - 1) + rule[2]
    print(f"e{j}:", entropy)
    j -= 1

for i, rule in enumerate(one_char_per_rule):
    _pool_of_char = CHARACTER_SUBSETS[rule[1]]
    print("len _pool_of_char:", len(_pool_of_char))
    position = _pool_of_char.find(rule[0])
    print("position:", position)
    entropy = entropy * len(_pool_of_char) + position
    print(f"e{j}:", entropy)
    j -= 1

pool_of_char = CHARACTER_SUBSETS["lowercase"] + CHARACTER_SUBSETS["digits"]
# print(chars_remaining)
while chars_remaining != "":
    last_char = chars_remaining[-1]
    chars_remaining = chars_remaining[:-1]
    entropy = entropy * len(pool_of_char) + pool_of_char.find(last_char)
    print(f"e{j}:", entropy)
    j -= 1
print(entropy)
print("x" * 100)
print(
    password._render_password(
        entropy,
        {
            "lowercase": True,
            "uppercase": False,
            "digits": True,
            "symbols": False,
            "length": 5,
        },
    )
)
