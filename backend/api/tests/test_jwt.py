from rest_framework.test import APITestCase

from api.tests import factories


class LogInTestCase(APITestCase):
    def setUp(self):
        factories.UserFactory(
            email="test@example.org",
            password="test@example.org",
        )

    def test_login(self):
        data = {
            "email": "test@example.org",
            "password": "test@example.org",
        }
        request = self.client.post("/auth/jwt/create/", data)
        self.assertEqual(request.status_code, 200)
        payload = request.json()
        self.assertTrue("access" in payload)
        self.assertTrue("refresh" in payload)

    def test_refresh_token(self):
        data = {
            "email": "test@example.org",
            "password": "test@example.org",
        }
        request = self.client.post("/auth/jwt/create/", data)
        self.assertEqual(request.status_code, 200)
        payload = request.json()
        refresh_token = payload["refresh"]
        request = self.client.post("/auth/jwt/refresh/", {"refresh": refresh_token})
        self.assertEqual(request.status_code, 200)
        payload = request.json()
        self.assertTrue("access" in payload)
        self.assertTrue("refresh" in payload)
