from django.core.cache import cache
from rest_framework import status
from rest_framework.test import APITestCase

from api.tests import factories


class AuthenticationThrottleTestCase(APITestCase):
    def setUp(self):
        cache.clear()
        factories.UserFactory(
            email="throttle-test@example.org",
            password="correct-password",
        )

    def tearDown(self):
        cache.clear()

    def assert_login_throttled(self, path):
        credentials = {
            "email": "throttle-test@example.org",
            "password": "wrong-password",
        }

        for _ in range(5):
            response = self.client.post(path, credentials, format="json")
            self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        response = self.client.post(path, credentials, format="json")
        self.assertEqual(
            response.status_code, status.HTTP_429_TOO_MANY_REQUESTS
        )

    def test_legacy_login_endpoint_is_throttled(self):
        self.assert_login_throttled("/tokens/auth/")

    def test_djoser_jwt_create_endpoint_is_throttled(self):
        self.assert_login_throttled("/auth/jwt/create/")

    def test_login_throttle_uses_client_ip_behind_proxy_chain(self):
        credentials = {
            "email": "throttle-test@example.org",
            "password": "wrong-password",
        }

        for attempt, proxy_last_octet in enumerate(range(52, 58), start=1):
            response = self.client.post(
                "/auth/jwt/create/",
                credentials,
                format="json",
                REMOTE_ADDR="192.0.2.19",
                HTTP_X_FORWARDED_FOR=(
                    "198.51.100.25, 203.0.113.%d" % proxy_last_octet
                ),
            )
            expected_status = (
                status.HTTP_429_TOO_MANY_REQUESTS
                if attempt == 6
                else status.HTTP_401_UNAUTHORIZED
            )
            self.assertEqual(response.status_code, expected_status)

    def test_password_reset_request_is_throttled(self):
        data = {"email": "unknown@example.org"}

        for _ in range(3):
            response = self.client.post(
                "/auth/users/reset_password/", data, format="json"
            )
            self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        response = self.client.post(
            "/auth/users/reset_password/", data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_429_TOO_MANY_REQUESTS)
