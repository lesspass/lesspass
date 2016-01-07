import uuid

from django.db import models
from django.contrib.auth.models import User


class DateMixin(models.Model):
    created = models.DateTimeField(auto_now_add=True, verbose_name='created')
    modified = models.DateTimeField(auto_now=True, verbose_name='modified')

    class Meta:
        abstract = True


class PasswordInfo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    counter = models.IntegerField(default=1)
    settings = models.TextField()
    length = models.IntegerField(default=12)

    class Meta:
        verbose_name_plural = "Password info"

    def __str__(self):
        return str(self.id)


class Entry(DateMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='entries')
    site = models.CharField(max_length=255)
    password = models.ForeignKey(PasswordInfo)

    title = models.CharField(max_length=255, null=True, blank=True)
    username = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Entries"

    def __str__(self):
        return self.title
