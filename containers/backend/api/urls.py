import rest_framework_simplejwt.views
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r"passwords", views.PasswordViewSet, basename="passwords")

urlpatterns = [
    path("", include(router.urls)),
    path("tokens/auth/", rest_framework_simplejwt.views.token_obtain_pair),
    path("tokens/refresh/", rest_framework_simplejwt.views.token_refresh),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]
