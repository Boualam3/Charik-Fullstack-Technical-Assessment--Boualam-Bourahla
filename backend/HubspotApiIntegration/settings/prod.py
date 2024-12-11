import os
from .base import *
# import dj_database_url
from dotenv import load_dotenv
load_dotenv()

DEBUG = False

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOST").split(" ")


INSTALLED_APPS += ['corsheaders']

MIDDLEWARE += [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

CORS_ALLOWED_ORIGINS =  os.environ.get("CORS_ALLOWED_ORIGINS", " ").split()

CORS_ALLOW_HEADERS = [
    'content-type',
    'authorization',
]

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'crmdb',
#         'USER': 'crmdbuser',
#         'PASSWORD': 'crmdbuserpasskey',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


STATIC_ROOT = os.path.join(BASE_DIR, 'django_static')
# Enable the WhiteNoise storage backend, which compresses static files to reduce disk use
# and renames the files with unique names for each version to support long-term caching
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
