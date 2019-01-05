#!/usr/bin/env bash
set -e

python3 --version
pushd containers
export COMPOSE_PROJECT_NAME=lesspass
docker-compose build
docker-compose up -d
docker exec -it lesspass_backend_1 sh -c 'python3 wait_db.py'
docker exec -it lesspass_backend_1 sh -c 'python3 manage.py test'
docker-compose down
popd