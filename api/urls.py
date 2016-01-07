from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register(r'auth', views.AuthViewSet, base_name="auth")
router.register(r'entries', views.EntryViewSet, base_name='entries')

urlpatterns = [
    url(r'^', include(router.urls)),
]
