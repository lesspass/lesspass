#!/usr/bin/env bash
set -e

# containers
export COMPOSE_PROJECT_NAME=lesspass
docker-compose build
docker-compose down -v
docker-compose up -d
docker exec -it lesspass_backend_1 sh -c 'python wait_db.py'
docker exec -it lesspass_backend_1 sh -c 'python manage.py test'
docker-compose down -v
