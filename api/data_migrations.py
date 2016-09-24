import json

from api import models


def create_password_with(entry):
    settings = json.dumps(entry.password.settings)
    lowercase = 'lowercase' in settings
    uppercase = 'uppercase' in settings
    symbol = 'symbols' in settings
    number = 'numbers' in settings
    user = models.LessPassUser.objects.get(id=entry.user.id)
    models.Password.objects.create(id=entry.id, site=entry.site, login=entry.login, user=user,
                                   lowercase=lowercase, uppercase=uppercase, symbol=symbol, number=number,
                                   counter=entry.password.counter, length=entry.password.length)
