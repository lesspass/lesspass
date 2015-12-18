from rest_framework import viewsets

from api import models
from api.permissions import IsOwner
from api.serializers import SiteSerializer


class SiteViewSet(viewsets.ModelViewSet):
    serializer_class = SiteSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        return models.Site.objects.filter(user=self.request.user)
