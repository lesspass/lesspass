#!/usr/bin/env bash
set -e

# containers
export COMPOSE_PROJECT_NAME=lesspass
docker-compose build
docker-compose up -d
date -u
docker exec -it lesspass_backend_1 sh -c '/opt/app/venv/bin/python wait_db.py'
date -u
docker exec -it lesspass_backend_1 sh -c '/opt/app/venv/bin/python manage.py test'
docker-compose down
