#!/usr/bin/env bash
set -e

podman login --username "$DOCKER_USERNAME" --password "$DOCKER_PASSWORD" docker.io
podman build --tag lesspass/webserver:latest ./webserver
podman images
podman --version
podman push --creds "$DOCKER_USERNAME:$DOCKER_PASSWORD" lesspass/webserver:latest docker://docker.io/lesspass/webserver