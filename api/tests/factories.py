import factory

from api import models


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = models.User

    username = factory.Sequence(lambda n: 'username{0}'.format(n))
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    email = factory.LazyAttribute(lambda a: '{0}.{1}@oslab.fr'.format(a.first_name, a.last_name).lower())
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
