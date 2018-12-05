from api import models, serializers
from api.permissions import IsOwner

from rest_framework import permissions, viewsets


class PasswordViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PasswordSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    search_fields = ('site', 'email',)
    ordering_fields = ('site', 'email', 'created')

    def get_queryset(self):
        return models.Password.objects.filter(user=self.request.user)
