from api import models
from rest_framework import serializers


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Password
        fields = ('id', 'login', 'site', 'lowercase', 'uppercase', 'symbols', 'numbers', 'counter', 'length',
                  'version', 'created', 'modified')
        read_only_fields = ('created', 'modified')

    def create(self, validated_data):
        user = self.context['request'].user
        return models.Password.objects.create(user=user, **validated_data)
