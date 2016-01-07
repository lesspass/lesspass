import os

from smartconfigparser import Config

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CONFIG_PATH = os.path.join(BASE_DIR, 'config')
if not os.path.exists(CONFIG_PATH):
    os.makedirs(CONFIG_PATH)

CONFIG_FILE = os.path.join(CONFIG_PATH, 'config.ini')
config = Config()
config.read(CONFIG_FILE)

try:
    SECRET_KEY = config.get('DJANGO', 'SECRET_KEY')
except:
    print('SECRET_KEY not found! Generating a new one...')
    import random

    SECRET_KEY = "".join([random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$^&*(-_=+)") for i in range(50)])
    if not config.has_section('DJANGO'):
        config.add_section('DJANGO')
    config.set('DJANGO', 'SECRET_KEY', SECRET_KEY)
    with open(CONFIG_FILE, 'wt') as f:
        config.write(f)

DEBUG = config.getboolean('DJANGO', 'DEBUG', False)

ALLOWED_HOSTS = config.getlist('DJANGO', 'ALLOWED_HOSTS', ['localhost', '127.0.0.1'])

INSTALLED_APPS = [
    'api.apps.ApiConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',

    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',

    'allauth.socialaccount.providers.persona',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'lesspass.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'lesspass.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = False

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ('rest_framework.permissions.IsAuthenticated',),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_FILTER_BACKENDS': ('rest_framework.filters.OrderingFilter',
                                'rest_framework.filters.SearchFilter',),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    ),
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

SITE_ID = 1

SOCIALACCOUNT_PROVIDERS = {
    'persona': {
        'AUDIENCE': config.get('DJANGO', 'PERSONA_AUDIENCE', 'https://lesspass.com'),
        'REQUEST_PARAMETERS': {
            'siteName': config.get('DJANGO', 'PERSONA_SITE_NAME', 'lesspass')
        }
    }
}

ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_LOGIN_ON_PASSWORD_RESET = True
ACCOUNT_SIGNUP_PASSWORD_VERIFICATION = False

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
