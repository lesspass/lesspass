from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class UserTestCase(APITestCase):
    def setUp(self):
        self.user = factories.UserFactory()
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_auth_user_me(self):
        request = self.client.get("/auth/users/me/")
        self.assertEqual(request.status_code, 200)
        self.assertEqual(request.data["key"], "")

    def test_update_auth_user_me(self):
        self.assertEqual(models.LessPassUser.objects.first().key, "")
        request = self.client.put("/auth/users/me/", {"key": "abc"})
        self.assertEqual(request.status_code, 200)
        self.assertEqual("abc", models.LessPassUser.objects.first().key)
        request = self.client.patch("/auth/users/me/", {"key": "def"})
        self.assertEqual(request.status_code, 200)
        self.assertEqual("def", models.LessPassUser.objects.first().key)

    def test_delete_auth_user_me(self):
        nb_of_users = models.LessPassUser.objects.all().count()
        user = factories.UserFactory(
            email="test@example.org",
            password="test@example.org",
        )
        self.assertEqual(nb_of_users + 1, models.LessPassUser.objects.all().count())
        client = APIClient()
        client.force_authenticate(user=user)
        credentials = {
            "email": "test@example.org",
            "password": "test@example.org",
        }
        login_request = client.post("/auth/jwt/create/", credentials)
        self.assertEqual(login_request.status_code, 200)
        delete_request = client.delete(
            "/auth/users/me/", {"current_password": "test@example.org"}
        )
        self.assertEqual(delete_request.status_code, 204)
        login_request = client.post("/auth/jwt/create/", credentials)
        self.assertEqual(login_request.status_code, 401)
        self.assertEqual(nb_of_users, models.LessPassUser.objects.all().count())


class RegisterTestCase(APITestCase):
    def test_register_is_refused(self):
        self.assertEqual(0, models.LessPassUser.objects.all().count())
        data = {
            "email": "contact@example.org",
            "password": "correct horse battery staple",
        }
        request = self.client.post("/auth/users/", data)
        self.assertEqual(request.status_code, 403)
        self.assertEqual(0, models.LessPassUser.objects.all().count())
