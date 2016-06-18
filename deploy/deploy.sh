#!/bin/bash

cd ..
docker exec -t lesspass_db_1 pg_dumpall -U postgres -c > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
export COMPOSE_HTTP_TIMEOUT=120
docker-compose -f docker-compose.yml -f docker-compose.prod.yml rm -f
docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d