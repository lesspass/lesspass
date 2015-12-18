from rest_framework import viewsets

from api import models
from api.serializers import SiteSerializer


class SiteViewSet(viewsets.ModelViewSet):
    queryset = models.Site.objects.all()
    serializer_class = SiteSerializer
