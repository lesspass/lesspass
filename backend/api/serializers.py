from api import models
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from djoser.serializers import UserCreateSerializer
from rest_framework.exceptions import PermissionDenied


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Password
        fields = (
            "id",
            "login",
            "site",
            "lowercase",
            "uppercase",
            "symbols",
            "digits",
            "counter",
            "length",
            "version",
            "created",
            "modified",
        )
        read_only_fields = ("created", "modified")

    def create(self, validated_data):
        user = self.context["request"].user
        return models.Password.objects.create(user=user, **validated_data)

    def to_internal_value(self, data):
        if "number" in data and "digits" not in data:
            data["digits"] = data["number"]
        if "numbers" in data and "digits" not in data:
            data["digits"] = data["numbers"]
        if "symbol" in data and "symbols" not in data:
            data["symbols"] = data["symbol"]
        data = super().to_internal_value(data)
        return data


class EncryptedPasswordProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EncryptedPasswordProfile
        fields = (
            "id",
            "password_profile",
            "created",
            "modified",
        )
        read_only_fields = ("created", "modified")

    def create(self, validated_data):
        user = self.context["request"].user
        return models.EncryptedPasswordProfile.objects.create(
            user=user, **validated_data
        )


class BackwardCompatibleTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data.update({"token": data["access"]})
        return data


class NoMoreUserSerializer(UserCreateSerializer):
    def validate(self, attrs):
        raise PermissionDenied("LessPass registration are no longer possible")
