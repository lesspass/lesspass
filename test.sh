#!/usr/bin/env bash
set -e

python3 --version

# containers
pushd containers
export COMPOSE_PROJECT_NAME=lesspass
docker-compose build
docker-compose up -d
docker exec -it lesspass_backend_1 sh -c 'python3 wait_db.py'
docker exec -it lesspass_backend_1 sh -c 'python3 manage.py test'
docker-compose down
popd

# cli
pushd cli
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt -r test-requirements.txt
tox
deactivate
popd