from django.conf.urls import include, url
from rest_framework import routers

from api import views

router = routers.DefaultRouter()
router.register(r'sites', views.SiteViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
