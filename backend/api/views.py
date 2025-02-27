from api import models, serializers
from api.permissions import IsOwner

from rest_framework import permissions, viewsets
from rest_framework_simplejwt.views import TokenObtainPairView


class PasswordViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PasswordSerializer
    permission_classes = (
        permissions.IsAuthenticated,
        IsOwner,
    )
    search_fields = (
        "site",
    )
    ordering_fields = ("site", "created")

    def get_queryset(self):
        return models.Password.objects.filter(user=self.request.user)


class EncryptedPasswordProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EncryptedPasswordProfileSerializer
    permission_classes = (
        permissions.IsAuthenticated,
        IsOwner,
    )

    def get_queryset(self):
        return models.EncryptedPasswordProfile.objects.filter(user=self.request.user)


class BackwardCompatibleTokenObtainPairView(TokenObtainPairView):
    serializer_class = serializers.BackwardCompatibleTokenObtainPairSerializer

    token_obtain_pair = TokenObtainPairView.as_view()
