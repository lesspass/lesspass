#!/usr/bin/env bash

docker-compose pull
docker-compose down
echo "Try to renew LestEncrypt certificate"
docker run -it --rm -p 443:443 -p 80:80 -v $PWD/letsencrypt:/etc/letsencrypt/ certbot/certbot renew
docker-compose up -d
