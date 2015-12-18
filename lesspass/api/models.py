from django.db import models
from django.contrib.auth.models import User


class DateMixin(models.Model):
    created = models.DateTimeField(auto_now_add=True, verbose_name='created')
    modified = models.DateTimeField(auto_now=True, verbose_name='modified')

    class Meta:
        abstract = True


class Site(DateMixin):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    password_length = models.IntegerField()
    password_type = models.CharField(max_length=255)
    counter = models.IntegerField(default=1)
