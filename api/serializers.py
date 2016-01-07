from api import models
from rest_framework import serializers


class PasswordInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PasswordInfo
        fields = ('counter', 'settings', 'length')


class EntrySerializer(serializers.ModelSerializer):
    password = PasswordInfoSerializer()

    class Meta:
        model = models.Entry
        fields = ('id', 'site', 'password', 'title', 'username', 'email', 'description', 'url', 'created', 'modified')
        read_only_fields = ('created', 'modified')
