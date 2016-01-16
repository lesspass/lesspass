#!/bin/sh

python manage.py migrate
python manage.py collectstatic --clear --no-input
gunicorn lesspass.wsgi:application -w 2 -b :8000
