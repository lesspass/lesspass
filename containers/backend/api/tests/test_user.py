from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class UserTestCase(APITestCase):
    def setUp(self):
        self.user = factories.UserFactory()
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_auth_user_me(self):
        request = self.client.get("/api/auth/users/me/")
        self.assertEqual(request.status_code, 200)
        self.assertIsNone(request.data["key"])

    def test_update_auth_user_me(self):
        self.assertIsNone(models.LessPassUser.objects.first().key)
        request = self.client.put("/api/auth/users/me/", {"key": "abc"})
        self.assertEqual(request.status_code, 200)
        self.assertEqual("abc", models.LessPassUser.objects.first().key)
        request = self.client.patch("/api/auth/users/me/", {"key": "def"})
        self.assertEqual(request.status_code, 200)
        self.assertEqual("def", models.LessPassUser.objects.first().key)
