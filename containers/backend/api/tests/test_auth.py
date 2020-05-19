from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class OldRegisterTestCase(APITestCase):
    def test_register(self):
        self.assertEqual(0, models.LessPassUser.objects.all().count())
        data = {
            "email": "contact@example.org",
            "password": "correct horse battery staple",
        }
        request = self.client.post("/api/auth/register/", data)
        self.assertEqual(request.status_code, 201)
        self.assertEqual(1, models.LessPassUser.objects.all().count())

    def test_register_404_weak_password(self):
        self.assertEqual(0, models.LessPassUser.objects.all().count())
        data = {
            "email": "contact@example.org",
            "password": "password",
        }
        request = self.client.post("/api/auth/register/", data)
        self.assertEqual(request.status_code, 400)
        self.assertEqual(0, models.LessPassUser.objects.all().count())


class OldLoginTestCase(APITestCase):
    def test_login(self):
        user = factories.UserFactory(
            email="contact@example.org", password="correct horse battery staple"
        )
        data = {
            "email": "contact@example.org",
            "password": "correct horse battery staple",
        }
        request = self.client.post("/api/tokens/auth/", data)
        self.assertEqual(request.status_code, 200)
        self.assertIsNotNone(request.data["token"])

    def test_login_bad_password(self):
        user = factories.UserFactory(
            email="contact@example.org", password="correct horse battery staple"
        )
        data = {
            "email": "contact@example.org",
            "password": "not the good password",
        }
        request = self.client.post("/api/tokens/auth/", data)
        self.assertEqual(request.status_code, 401)
