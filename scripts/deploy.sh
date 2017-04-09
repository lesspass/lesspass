#!/bin/bash

export COMPOSE_HTTP_TIMEOUT=600

# pull new images
docker-compose pull

# restart container
docker-compose down
docker-compose up -d
docker images --quiet --filter=dangling=true | xargs --no-run-if-empty docker rmi
