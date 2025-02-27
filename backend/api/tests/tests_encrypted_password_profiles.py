from rest_framework.test import APITestCase, APIClient

from api import models
from api.tests import factories


class LogoutEncryptedPasswordProfileTestCase(APITestCase):
    def test_get_password_profiles_401(self):
        response = self.client.get("/encrypted_password_profiles/")
        self.assertEqual(401, response.status_code)


class LoginEncryptedPasswordProfileTestCase(APITestCase):
    def setUp(self):
        self.user = factories.UserFactory()
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_empty_password_profiless(self):
        request = self.client.get("/encrypted_password_profiles/")
        self.assertEqual(0, len(request.data["results"]))

    def test_retrieve_its_own_password_profiles(self):
        factories.EncryptedPasswordProfileFactory(
            user=self.user, password_profile="encrypted_content"
        )
        request = self.client.get("/encrypted_password_profiles/")
        self.assertEqual(1, len(request.data["results"]))
        self.assertEqual(
            "encrypted_content",
            request.data["results"][0]["password_profile"],
        )

    def test_cant_retrieve_other_password_profiles(self):
        not_my_password_profile = factories.EncryptedPasswordProfileFactory(
            user=factories.UserFactory()
        )
        request = self.client.get(
            "/encrypted_password_profiles/%s/" % not_my_password_profile.id
        )
        self.assertEqual(404, request.status_code)

    def test_delete_its_own_password_profiles(self):
        password_profile = factories.EncryptedPasswordProfileFactory(user=self.user)
        self.assertEqual(1, models.EncryptedPasswordProfile.objects.all().count())
        request = self.client.delete(
            "/encrypted_password_profiles/%s/" % password_profile.id
        )
        self.assertEqual(204, request.status_code)
        self.assertEqual(0, models.EncryptedPasswordProfile.objects.all().count())

    def test_cant_delete_other_password_profiles(self):
        not_my_password_profile = factories.EncryptedPasswordProfileFactory(
            user=factories.UserFactory()
        )
        self.assertEqual(1, models.EncryptedPasswordProfile.objects.all().count())
        request = self.client.delete(
            "/encrypted_password_profiles/%s/" % not_my_password_profile.id
        )
        self.assertEqual(404, request.status_code)
        self.assertEqual(1, models.EncryptedPasswordProfile.objects.all().count())

    def test_create_password(self):
        self.assertEqual(0, models.EncryptedPasswordProfile.objects.count())
        self.client.post(
            "/encrypted_password_profiles/",
            {"password_profile": "test_create_password"},
        )
        self.assertEqual(1, models.EncryptedPasswordProfile.objects.count())
        password_profile = models.EncryptedPasswordProfile.objects.first()
        self.assertEqual(password_profile.password_profile, "test_create_password")

    def test_update_password_profile(self):
        password_profile = factories.EncryptedPasswordProfileFactory(user=self.user)
        self.assertNotEqual(
            "test_update_password_profile", password_profile.password_profile
        )
        request = self.client.put(
            "/encrypted_password_profiles/%s/" % password_profile.id,
            {"password_profile": "test_update_password_profile"},
        )
        self.assertEqual(200, request.status_code)
        password_profile_updated = models.EncryptedPasswordProfile.objects.get(
            id=password_profile.id
        )
        self.assertEqual(
            "test_update_password_profile", password_profile_updated.password_profile
        )

    def test_cant_update_other_password(self):
        not_my_password_profile = factories.EncryptedPasswordProfileFactory(
            user=factories.UserFactory(),
            password_profile="test_cant_update_other_password",
        )
        self.assertEqual(
            "test_cant_update_other_password", not_my_password_profile.password_profile
        )
        request = self.client.put(
            "/encrypted_password_profiles/%s/" % not_my_password_profile.id,
            {"password_profile": "not_my_password_profile"},
        )
        self.assertEqual(404, request.status_code)
        self.assertEqual(
            "test_cant_update_other_password",
            models.EncryptedPasswordProfile.objects.first().password_profile,
        )
