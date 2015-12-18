from rest_framework.test import APITestCase, APIClient

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
        not_my_site = factories.SiteFactory(user=factories.UserFactory())

        request = self.client.get('/api/sites/%s/' % not_my_site.id)
        self.assertEqual(404, request.status_code)

        request = self.client.get('/api/sites/')
        self.assertEqual(1, len(request.data['results']))
        self.assertEqual(site.name, request.data['results'][0]['name'])


