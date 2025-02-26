from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api import views
from djoser import views as djoser_views

router = DefaultRouter()
router.register(r"passwords", views.PasswordViewSet, basename="passwords")
router.register(
    r"encrypted_password_profiles",
    views.EncryptedPasswordProfileViewSet,
    basename="encrypted_password_profiles",
)
router.register(r"auth/register", djoser_views.UserViewSet, basename="auth_register")

urlpatterns = [
    path("", include(router.urls)),
    path("tokens/auth/", views.BackwardCompatibleTokenObtainPairView.as_view()),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]
