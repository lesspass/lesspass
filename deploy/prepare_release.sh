#!/bin/bash

echo "prepare release"
cd ..
docker-compose -f docker-compose.yml -f docker-compose.prod.yml stop
docker-compose -f docker-compose.yml -f docker-compose.prod.yml rm -f
docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
echo "run tests"
docker exec lesspass_frontend_1 npm run test
docker exec lesspass_backend_1 python manage.py test

echo "build frontend"
cd frontend
npm run build

cd ..
git status
cd deploy