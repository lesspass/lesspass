#!/usr/bin/env bash

python wait_db.py
python manage.py migrate
python manage.py collectstatic --clear --no-input

exec "$@"