import rest_framework_simplejwt.views
import djoser.views
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r"passwords", views.PasswordViewSet, basename="passwords")
router.register(
    r"encrypted_password_profiles",
    views.EncryptedPasswordProfileViewSet,
    basename="encrypted_password_profiles",
)
router.register(r"auth/register", djoser.views.UserViewSet, basename="auth_register")

urlpatterns = [
    path("", include(router.urls)),
    path("tokens/auth/", views.BackwardCompatibleTokenObtainPairView.as_view()),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]
