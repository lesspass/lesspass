from django.test import TestCase

from api import models
from api.tests import factories
from api.data_migrations import create_password_with


class DataMigrationTestCase(TestCase):
    def setUp(self):
        self.user = factories.UserFactory()

    def test_create_password_with_entry(self):
        entry = factories.EntryFactory(user=self.user)

        create_password_with(entry)

        password = models.Password.objects.get(id=entry.id)
        self.assertEqual(entry.user, password.user)
        self.assertEqual(entry.login, password.login)
        self.assertEqual(entry.site, password.site)

    def test_create_password_with_entry_copy_password_info(self):
        entry = factories.EntryFactory(user=self.user)

        create_password_with(entry)

        password = models.Password.objects.get(id=entry.id)
        self.assertTrue(password.lowercase)
        self.assertTrue(password.uppercase)
        self.assertTrue(password.symbols)
        self.assertTrue(password.numbers)
        self.assertEqual(entry.password.length, password.length)
        self.assertEqual(entry.password.counter, password.counter)

    def test_create_password_robust(self):
        password_info = factories.PasswordInfoFactory(settings='["lowercase", "numbers"]', counter=2, length=14)
        entry = factories.EntryFactory(site='migration.com', login='contact@migration.com',
                                       user=self.user, password=password_info)

        create_password_with(entry)

        password = models.Password.objects.get(id=entry.id)
        self.assertEqual(self.user, password.user)
        self.assertEqual('contact@migration.com', password.login)
        self.assertEqual('migration.com', password.site)
        self.assertTrue(password.lowercase)
        self.assertFalse(password.uppercase)
        self.assertFalse(password.symbols)
        self.assertTrue(password.numbers)
        self.assertEqual(14, password.length)
        self.assertEqual(2, password.counter)
