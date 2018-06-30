import factory

from api import models


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.LessPassUser

    email = factory.Sequence(lambda n: 'u{0}@lesspass.com'.format(n))
    password = factory.PostGenerationMethodCall('set_password', 'password')
    is_admin = False


class AdminFactory(UserFactory):
    is_admin = True


class PasswordFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.Password

    user = factory.SubFactory(UserFactory)
    login = 'admin@oslab.fr'
    site = 'lesspass.com'
