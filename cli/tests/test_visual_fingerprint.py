from lesspass.visual_fingerprint import (
    get_fingerprint,
    get_hmac_sha256
)


def get_fingerprint_from_password(password_bytes):
    return get_fingerprint(get_hmac_sha256(password_bytes))


def test_get_fingerprint():
    assert get_fingerprint_from_password(b'password') == [
        {
            "color": "\x1b[30;45m",  # => #FFB5DA
            "icon": "flask"
        },
        {
            "color": "\x1b[30;46m",  # => #009191
            "icon": "archive"
        },
        {
            "color": "\x1b[30;44m",  # => #B5DAFE
            "icon": "beer"
        }
    ]
    assert get_fingerprint_from_password(b'Password12345') == [
        {
            "color": "\x1b[30;41m",  # => #924900
            "icon": "ambulance"
        },
        {
            "color": "\x1b[30;44m",  # => #6DB5FE
            "icon": "bed"
        },
        {
            "color": "\x1b[30;45m",  # => #FF6CB6
            "icon": "British pound"
        }
    ]
    assert get_fingerprint_from_password(b'Ma$$W0rld!@#$%^&*()<gamma>') == [
        {
            "color": "\x1b[30;44m",  # =>  #B5DAFE
            "icon": "area-chart"
        },
        {
            "color": "\x1b[30;45m",  # =>  #490092
            "icon": "British pound"
        },
        {
            "color": "\x1b[30;41m",  # =>  #924900
            "icon": "British pound"
        }
    ]
