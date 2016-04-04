from api import models, serializers
from api.permissions import IsOwner

from django.contrib.auth import login, authenticate
from rest_framework import status, permissions, viewsets
from rest_framework.response import Response


class AuthViewSet(viewsets.ViewSet):
    permission_classes = (permissions.AllowAny,)

    @staticmethod
    def list(request, format=None):
        if request.user.is_authenticated():
            user = {
                'id': request.user.id,
                'email': request.user.email,
                'is_admin': request.user.is_staff,
                'is_authenticated': True
            }
        else:
            user = {
                'id': None,
                'email': None,
                'is_admin': False,
                'is_authenticated': False
            }

        return Response({
            'user': user
        })

    @staticmethod
    def post(request):
        user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
        if user and user.is_active:
            login(request, user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_401_UNAUTHORIZED)


class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EntrySerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    search_fields = ('site', 'email',)
    ordering_fields = ('site', 'email', 'created')

    def get_queryset(self):
        return models.Entry.objects.filter(user=self.request.user)
