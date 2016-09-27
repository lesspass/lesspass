import json

from api import models
from rest_framework import serializers

from django.utils.translation import ugettext_lazy as _


class JsonSettingsField(serializers.Field):
    default_error_messages = {
        'invalid': _('Value must be valid JSON.')
    }

    def to_representation(self, value):
        return json.loads(value)

    def to_internal_value(self, data):
        try:
            return json.dumps(data)
        except (TypeError, ValueError):
            self.fail('invalid')


class PasswordInfoSerializer(serializers.ModelSerializer):
    settings = JsonSettingsField()

    class Meta:
        model = models.PasswordInfo
        fields = ('counter', 'settings', 'length')


class EntrySerializer(serializers.ModelSerializer):
    site = serializers.CharField(allow_blank=True)
    login = serializers.CharField(allow_blank=True)
    password = PasswordInfoSerializer()

    class Meta:
        model = models.Entry
        fields = ('id', 'site', 'login', 'password', 'created', 'modified')
        read_only_fields = ('created', 'modified')

    def create(self, validated_data):
        password_data = validated_data.pop('password')
        user = self.context['request'].user
        password_info = models.PasswordInfo.objects.create(**password_data)
        return models.Entry.objects.create(user=user, password=password_info, **validated_data)

    def update(self, instance, validated_data):
        password_data = validated_data.pop('password')
        password_info = instance.password
        for attr, value in password_data.items():
            setattr(password_info, attr, value)
        password_info.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Password
        fields = ('id', 'login', 'site', 'lowercase', 'uppercase', 'symbols', 'numbers', 'counter', 'length',
                  'created', 'modified')
        read_only_fields = ('created', 'modified')

    def create(self, validated_data):
        user = self.context['request'].user
        return models.Password.objects.create(user=user, **validated_data)
