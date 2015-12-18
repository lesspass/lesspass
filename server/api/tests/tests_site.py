from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class LogoutApiTestCase(APITestCase):
    def test_get_sites_403(self):
        response = self.client.get('/api/sites/')
        self.assertEqual(403, response.status_code)


class LoginApiTestCase(APITestCase):
    def setUp(self):
        self.user = factories.UserFactory()
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_empty_sites(self):
        request = self.client.get('/api/sites/')
        self.assertEqual(0, len(request.data['results']))

    def test_retrieve_its_own_sites(self):
        site = factories.SiteFactory(user=self.user)
        request = self.client.get('/api/sites/')
        self.assertEqual(1, len(request.data['results']))
        self.assertEqual(site.name, request.data['results'][0]['name'])

    def test_cant_retrieve_other_sites(self):
        not_my_site = factories.SiteFactory(user=factories.UserFactory())
        request = self.client.get('/api/sites/%s/' % not_my_site.id)
        self.assertEqual(404, request.status_code)

    def test_delete_its_own_sites(self):
        site = factories.SiteFactory(user=self.user)
        self.assertEqual(1, models.Site.objects.all().count())
        request = self.client.delete('/api/sites/%s/' % site.id)
        self.assertEqual(204, request.status_code)
        self.assertEqual(0, models.Site.objects.all().count())

    def test_cant_delete_other_site(self):
        not_my_site = factories.SiteFactory(user=factories.UserFactory())
        self.assertEqual(1, models.Site.objects.all().count())
        request = self.client.delete('/api/sites/%s/' % not_my_site.id)
        self.assertEqual(404, request.status_code)
        self.assertEqual(1, models.Site.objects.all().count())
