import uuid
from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class LesspassUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password=password, )
        user.is_admin = True
        user.save(using=self._db)
        return user


class LessPassUser(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = LesspassUserManager()

    USERNAME_FIELD = 'email'

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_superuser(self):
        return self.is_admin

    @property
    def is_staff(self):
        return self.is_admin

    class Meta:
        verbose_name_plural = "Users"


class DateMixin(models.Model):
    created = models.DateTimeField(auto_now_add=True, verbose_name='created')
    modified = models.DateTimeField(auto_now=True, verbose_name='modified')

    class Meta:
        abstract = True


class Password(DateMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(LessPassUser, on_delete=models.CASCADE, related_name='passwords')
    login = models.CharField(max_length=255, null=True, blank=True)
    site = models.CharField(max_length=255, null=True, blank=True)

    lowercase = models.BooleanField(default=True)
    uppercase = models.BooleanField(default=True)
    symbols = models.BooleanField(default=True)
    numbers = models.BooleanField(default=True)

    length = models.IntegerField(default=16)
    counter = models.IntegerField(default=1)

    version = models.IntegerField(default=2)

    def __str__(self):
        return str(self.id)

