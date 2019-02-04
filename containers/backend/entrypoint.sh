#!/usr/bin/env bash

/opt/app/venv/bin/python wait_db.py
/opt/app/venv/bin/python manage.py migrate
/opt/app/venv/bin/python manage.py collectstatic --clear --no-input

exec "$@"