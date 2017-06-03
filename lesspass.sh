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

if [ "$(uname)" == "Darwin" ]
then
    DATABASE_PASSWORD=$(date +%s | shasum -a 256 | base64 | head -c 32)
    SECRET_KEY=$(date +%s | shasum -a 256 | base64 | head -c 32)
else
    DATABASE_PASSWORD=$(date +%s | sha256sum | base64 | head -c 32)
    SECRET_KEY=$(date +%s | sha256sum | base64 | head -c 32)
fi

if [ "$#" -eq  "1" ]
then
    DOMAIN=$1
else
    echo "Please enter your domain name (e.g. example.org): "
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

echo "LessPass Database is now running on $DOMAIN"
echo "If you want to configure an email server for your LessPass Database see: https://github.com/lesspass/lesspass#configure-email"
