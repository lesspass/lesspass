#!/usr/bin/env bash
set -e

#########
# Check #
#########
OUTPUT_DIR=LessPass
if [ -d "$OUTPUT_DIR" ]
then
    echo "LessPass directory exists, move ./LessPass folder and re-run lesspass.sh script"
    exit 1
fi
docker --version
docker-compose --version

####################
# Context creation #
####################
mkdir $OUTPUT_DIR
cd $OUTPUT_DIR

if [ "$#" -eq  "2" ]
then
    DOMAIN=$1
    EMAIL=$2
else
    echo "Please enter your domain name (e.g. example.org): "
    read DOMAIN
    echo
    echo "Please enter your email (Used to generate an HTTPS certificate with LetsEncrypt):"
    read EMAIL
fi

DATABASE_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9_ </dev/urandom | head -c 32)
SECRET_KEY=$(LC_ALL=C tr -dc A-Za-z0-9_ </dev/urandom | head -c 32)

cat >> .env << EOF
ALLOWED_HOSTS=.$DOMAIN
DATABASE_PASSWORD=$DATABASE_PASSWORD
SECRET_KEY=$SECRET_KEY
DOMAIN=$DOMAIN
EMAIL=$EMAIL
EOF

#######################
# Docker compose file #
#######################
curl -s -o docker-compose.yml https://raw.githubusercontent.com/lesspass/lesspass/master/containers/docker-compose.prod.yml
docker-compose pull
docker-compose down

###############
# LetsEncrypt #
###############
echo "Create LetsEncrypt certificate..."
mkdir letsencrypt
docker run -it --rm -p 443:443 -p 80:80 -v $PWD/letsencrypt:/etc/letsencrypt/ certbot/certbot certonly --standalone --noninteractive --quiet --email $EMAIL --agree-tos -d $DOMAIN
docker run -it --rm -v $PWD/letsencrypt/live/:/certificates/ lesspass/openssl openssl dhparam -out /certificates/$DOMAIN/dhparam.pem 4096

############
# LessPass #
############
curl -s -o update.sh https://raw.githubusercontent.com/lesspass/lesspass/master/scripts/update.sh
chmod u+x update.sh
docker-compose up -d
echo "--------------------------------------------"
echo "Congratulation LessPass Database is running!"
echo "--------------------------------------------"
echo "visit https://$DOMAIN"
echo
echo "## Create super user"
echo "see: https://github.com/lesspass/lesspass#create-super-user"
echo
echo "## Update LessPass"
echo "Just run ./update.sh"
echo "It renews the LestEncrypt certificate and updates LessPass"

