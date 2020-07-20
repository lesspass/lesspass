from lesspass.fingerprint import get_mnemonic


def test_get_fingerprint():
    assert get_mnemonic(b"password") == "⚗️🗄️🍺"
    assert get_mnemonic(b"Password12345") == "🚑🛏️💷"
    assert get_mnemonic(b"Ma$$W0rld!@#$%^&*()<gamma>") == "📈💷💷"
