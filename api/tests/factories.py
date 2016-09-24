import factory

from api import models


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.LessPassUser

    email = factory.Sequence(lambda n: 'u{0}@lesspass.com'.format(n))
    password = factory.PostGenerationMethodCall('set_password', 'password')
    is_staff = False


class AdminFactory(UserFactory):
    is_staff = True


class PasswordInfoFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.PasswordInfo

    settings = '["lowercase", "uppercase", "numbers", "symbols"]'


class EntryFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.Entry

    user = factory.SubFactory(UserFactory)
    password = factory.SubFactory(PasswordInfoFactory)

    title = 'twitter'
    site = 'twitter'
    username = 'guillaume20100'
    url = 'https://twitter.com/'


class PasswordFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.Password

    user = factory.SubFactory(UserFactory)
    login = 'admin@oslab.fr'
    site = 'lesspass.com'
