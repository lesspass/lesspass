import json

from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class LogoutApiTestCase(APITestCase):
    def test_get_entries_401(self):
        response = self.client.get('/api/entries/')
        self.assertEqual(401, response.status_code)


class LoginApiTestCase(APITestCase):
    def setUp(self):
        self.user = factories.UserFactory()
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_empty_entries(self):
        request = self.client.get('/api/entries/')
        self.assertEqual(0, len(request.data['results']))

    def test_retrieve_its_own_entries(self):
        entry = factories.EntryFactory(user=self.user)
        request = self.client.get('/api/entries/')
        self.assertEqual(1, len(request.data['results']))
        self.assertEqual(entry.site, request.data['results'][0]['site'])

    def test_cant_retrieve_other_entries(self):
        not_my_entry = factories.EntryFactory(user=factories.UserFactory())
        request = self.client.get('/api/entries/%s/' % not_my_entry.id)
        self.assertEqual(404, request.status_code)

    def test_delete_its_own_entries(self):
        entry = factories.EntryFactory(user=self.user)
        self.assertEqual(1, models.Entry.objects.all().count())
        request = self.client.delete('/api/entries/%s/' % entry.id)
        self.assertEqual(204, request.status_code)
        self.assertEqual(0, models.Entry.objects.all().count())

    def test_cant_delete_other_entry(self):
        not_my_entry = factories.EntryFactory(user=factories.UserFactory())
        self.assertEqual(1, models.Entry.objects.all().count())
        request = self.client.delete('/api/entries/%s/' % not_my_entry.id)
        self.assertEqual(404, request.status_code)
        self.assertEqual(1, models.Entry.objects.all().count())

    def test_create_entry(self):
        entry = {
            "site": "twitter",
            "password": {
                "counter": 1,
                "settings": [
                    "lowercase",
                    "uppercase",
                    "numbers",
                    "symbols"
                ],
                "length": 12
            },
            "title": "twitter",
            "username": "guillaume20100",
            "email": "guillaume@oslab.fr",
            "description": "",
            "url": "https://twitter.com/"
        }
        self.assertEqual(0, models.Entry.objects.count())
        self.assertEqual(0, models.PasswordInfo.objects.count())
        self.client.post('/api/entries/', entry)
        self.assertEqual(1, models.Entry.objects.count())
        self.assertEqual(1, models.PasswordInfo.objects.count())

    def test_update_entry(self):
        entry = factories.EntryFactory(user=self.user)
        self.assertNotEqual('facebook', entry.site)
        new_entry = {
            "site": "facebook",
            "password": {
                "counter": 1,
                "settings": [
                    "lowercase",
                    "uppercase",
                    "numbers"
                ],
                "length": 12
            },
            "title": "facebook",
            "username": "",
            "email": "",
            "description": "",
            "url": "https://facebook.com/"
        }
        self.client.put('/api/entries/%s/' % entry.id, new_entry)
        entry_updated = models.Entry.objects.get(id=entry.id)
        self.assertEqual('facebook', entry_updated.site)
        self.assertEqual(3, len(json.loads(entry_updated.password.settings)))

    def test_cant_update_other_entry(self):
        not_my_entry = factories.EntryFactory(user=factories.UserFactory())
        self.assertEqual('twitter', not_my_entry.site)
        new_entry = {
            "site": "facebook",
            "password": {"settings": []}
        }
        request = self.client.put('/api/entries/%s/' % not_my_entry.id, new_entry)
        self.assertEqual(404, request.status_code)
        self.assertEqual(1, models.Entry.objects.all().count())
