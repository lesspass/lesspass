from lesspass.visual_fingerprint import (
    get_fingerprint,
    get_hmac_sha256
)


def get_fingerprint_from_password(password_bytes):
    return get_fingerprint(get_hmac_sha256(password_bytes))


def test_get_fingerprint():
    assert get_fingerprint_from_password(b'password') == [
        {
            "color": "\x1b[1;37;45m",  # => #FFB5DA
            "icon": "flask"
        },
        {
            "color": "\x1b[1;37;46m",  # => #009191
            "icon": "archive"
        },
        {
            "color": "\x1b[1;36;47m",  # => #B5DAFE
            "icon": "beer"
        }
    ]
    assert get_fingerprint_from_password(b'Password12345') == [
        {
            "color": "\x1b[1;33;41m",  # => #924900
            "icon": "ambulance"
        },
        {
            "color": "\x1b[1;36;47m",  # => #6AB0F7
            "icon": "bed"
        },
        {
            "color": "\x1b[1;36;45m",  # => #FF6CB6
            "icon": "British pound"
        }
    ]
    assert get_fingerprint_from_password(b'Ma$$W0rld!@#$%^&*()<gamma>') == [
        {
            "color": "\x1b[1;36;47m",  # =>  #B5DAFE
            "icon": "area-chart"
        },
        {
            "color": "\x1b[1;35;44m",  # =>  #490092
            "icon": "British pound"
        },
        {
            "color": "\x1b[1;33;41m",  # =>  #924900
            "icon": "British pound"
        }
    ]
