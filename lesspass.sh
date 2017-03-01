#!/usr/bin/env bash

OUTPUT_DIR=LessPass
if [ -d "$OUTPUT_DIR" ]
then
    echo "LessPass directory exists, move ./LessPass folder and re-run lesspass.sh script"
    exit 1
fi

mkdir $OUTPUT_DIR
cd $OUTPUT_DIR

curl -o docker-compose.yml https://raw.githubusercontent.com/lesspass/lesspass/master/docker-compose.prod.yml

DATABASE_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9_ </dev/urandom | head -c 32)
SECRET_KEY=$(LC_ALL=C tr -dc A-Za-z0-9_ </dev/urandom | head -c 32)

if [ "$#" -eq  "1" ]
then
    DOMAIN=$1
else
    echo "Please enter your domain name: "
    read DOMAIN
fi

# create env file
cat >> .env << EOF
ALLOWED_HOSTS=.$DOMAIN
DATABASE_PASSWORD=$DATABASE_PASSWORD
SECRET_KEY=$SECRET_KEY
DOMAIN=$DOMAIN
EOF

# pull new images
docker-compose pull

# restart container
docker-compose down
docker-compose up -d
