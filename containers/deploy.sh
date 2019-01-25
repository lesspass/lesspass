#!/usr/bin/env bash
set -e

echo "$DOCKER_PASSWORD" | docker login --username "$DOCKER_USERNAME" --password-stdin
docker build --tag lesspass/webserver:latest ./webserver
docker images
docker --version
docker push lesspass/webserver:latest docker://docker.io/lesspass/webserver