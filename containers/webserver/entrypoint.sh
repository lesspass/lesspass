#!/usr/bin/env bash

create_wildcard_certificate () {
  openssl req -x509 -newkey rsa:4096 -nodes -keyout ${1}.key -out ${1}.crt -days 365 -subj "/C=FR/ST=Gironde/L=Bordeaux/O=LessPass/OU=LessPass/CN=*.${1}"
}

if [[ ! -f /ssl/${FQDN}.crt || ! -f /ssl/${FQDN}.key ]]; then
  echo "${FQDN}.crt or ${FQDN}.key not found! Generate wildcard certificate"
  cd /ssl
  create_wildcard_certificate ${FQDN}
fi

mkdir -p /etc/httpd/ssl
mkdir -p /etc/httpd/ssl/private
chmod 755 /etc/httpd/ssl
chmod 710 /etc/httpd/ssl/private

cp /ssl/${FQDN}.crt /etc/httpd/ssl/
chmod 644 /etc/httpd/ssl/${FQDN}.crt

cp /ssl/${FQDN}.key /etc/httpd/ssl/private/
chmod 640 /etc/httpd/ssl/private/${FQDN}.key

python3 /webserver/generate_apache_conf.py

cat /etc/httpd/conf.d/lesspass.conf

exec "$@"