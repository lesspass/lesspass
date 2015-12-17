from api import views
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.SiteViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework'))
]
