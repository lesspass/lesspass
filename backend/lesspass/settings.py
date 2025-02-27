import logging
import os
import random
import sys
import datetime
from envparse import env
from django.utils.translation import gettext_lazy as _

from urllib.parse import urlparse, parse_qs

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def get_secret_key(secret_key):
    if not secret_key:
        return "".join(
            [
                random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$^&*(-_=+)")
                for i in range(50)
            ]
        )
    return secret_key


SECRET_KEY = env("SECRET_KEY", preprocessor=get_secret_key, default=None)

DEBUG = env.bool("DEBUG", default=False)

ALLOWED_HOSTS = (
    []
    if DEBUG == True
    else env(
        "ALLOWED_HOSTS",
        cast=list,
        default=[
            ".lesspass.com",
        ],
    )
)

ADMINS = (("Guillaume Vincent", "guillaume@oslab.fr"),)

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.postgres",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
    "djoser",
    "api",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = env.bool("CORS_ORIGIN_ALLOW_ALL", default=True)

ROOT_URLCONF = "lesspass.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "lesspass.wsgi.application"


DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL:
    r = urlparse(DATABASE_URL)
    sslmode = parse_qs(r.query).get("sslmode", ["require"])[0]
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": os.path.relpath(r.path, "/"),
            "USER": r.username,
            "PASSWORD": r.password,
            "HOST": r.hostname,
            "PORT": r.port,
            "OPTIONS": {"sslmode": sslmode},
        }
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": f"{BASE_DIR}/db.sqlite3",
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "fr"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATIC_DIR = os.path.join(BASE_DIR, "static")
if not os.path.exists(STATIC_DIR):
    os.mkdir(STATIC_DIR)
STATICFILES_DIRS = (STATIC_DIR,)

MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "www", "media")

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        }
    },
    "root": {
        "handlers": ["console"],
        "level": env("DJANGO_LOG_LEVEL", default="DEBUG"),
    },
}

AUTH_USER_MODEL = "api.LessPassUser"

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 1000,
    "DEFAULT_FILTER_BACKENDS": (
        "rest_framework.filters.OrderingFilter",
        "rest_framework.filters.SearchFilter",
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
        "rest_framework.authentication.BasicAuthentication",
        "rest_framework.authentication.SessionAuthentication",
    ),
    "DEFAULT_RENDERER_CLASSES": ("rest_framework.renderers.JSONRenderer",),
    "DEFAULT_PARSER_CLASSES": ("rest_framework.parsers.JSONParser",),
    "TEST_REQUEST_DEFAULT_FORMAT": "json",
}

if not DEBUG:
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True


class DisableMigrations(object):
    def __contains__(self, item):
        return True

    def __getitem__(self, item):
        return None


TESTS_IN_PROGRESS = False
if "test" in sys.argv[1:] or "jenkins" in sys.argv[1:]:
    logging.disable(logging.CRITICAL)
    PASSWORD_HASHERS = ("django.contrib.auth.hashers.MD5PasswordHasher",)
    DEBUG = False
    TEMPLATE_DEBUG = False
    TESTS_IN_PROGRESS = True
    MIGRATION_MODULES = DisableMigrations()

SITE_NAME = "LessPass"
DOMAIN = env("FRONTEND_HOST", default="www.lesspass.com")
DJOSER = {
    "SERIALIZERS": {
        "user_create": "api.serializers.NoMoreUserSerializer",
    },
    "PASSWORD_RESET_CONFIRM_URL": "auth/resetPassword/{uid}/{token}/",
    "ACTIVATION_URL": "auth/activate/{uid}/{token}/",
    "TOKEN_MODEL": None,
}
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": (
        "Bearer",
        "JWT",
    ),
    "ACCESS_TOKEN_LIFETIME": datetime.timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": datetime.timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "UPDATE_LAST_LOGIN": True,
}

if DEBUG:
    EMAIL_BACKEND = os.getenv(
        "EMAIL_BACKEND", "django.core.mail.backends.console.EmailBackend"
    )
else:
    EMAIL_BACKEND = os.getenv(
        "EMAIL_BACKEND", "django.core.mail.backends.smtp.EmailBackend"
    )

DEFAULT_FROM_EMAIL = os.getenv("DEFAULT_FROM_EMAIL", "LessPass <contact@lesspass.com>")
SERVER_EMAIL = DEFAULT_FROM_EMAIL
EMAIL_HOST = os.getenv("EMAIL_HOST", "localhost")
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "")
EMAIL_PORT = env.int("EMAIL_PORT", default=25)
EMAIL_SUBJECT_PREFIX = os.getenv("EMAIL_SUBJECT_PREFIX", "[LessPass] ")
EMAIL_USE_TLS = env.bool("EMAIL_USE_TLS", default=False)
EMAIL_USE_SSL = env.bool("EMAIL_USE_SSL", default=False)


DEFAULT_AUTO_FIELD = "django.db.models.AutoField"
