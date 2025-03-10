import factory
from factory.django import DjangoModelFactory

from api import models


class UserFactory(DjangoModelFactory):
    class Meta:
        model = models.LessPassUser

    email = factory.Sequence(lambda n: "u{0}@lesspass.com".format(n))
    password = factory.PostGenerationMethodCall("set_password", "password")
    is_admin = False


class AdminFactory(UserFactory):
    is_admin = True


class PasswordFactory(DjangoModelFactory):
    class Meta:
        model = models.Password

    user = factory.SubFactory(UserFactory)
    login = "contact@lesspass.com"
    site = "lesspass.com"


class EncryptedPasswordProfileFactory(DjangoModelFactory):
    class Meta:
        model = models.EncryptedPasswordProfile

    user = factory.SubFactory(UserFactory)
