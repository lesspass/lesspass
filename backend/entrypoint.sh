#!/bin/sh

while ! nc -z db 5432; do sleep 3; done

python manage.py migrate
python manage.py collectstatic --clear --no-input

exec "$@"