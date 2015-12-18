from rest_framework import serializers

from api.models import Site


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('user', 'name', 'password_length', 'password_type', 'counter', 'created', 'modified')
