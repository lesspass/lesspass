from api.models import Site
from api.serializers import SiteSerializer
from rest_framework import viewsets


class SiteViewSet(viewsets.ModelViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializer
