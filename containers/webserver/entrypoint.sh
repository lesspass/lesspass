#!/usr/bin/env bash

sed -i "s~FQDN~${FQDN}~" conf/httpd.conf conf/extra/httpd-ssl.conf
sed -i "s~EMAIL~${EMAIL}~" conf/httpd.conf conf/extra/httpd-ssl.conf
sed -i "s~CRT_PATH~${CRT_PATH}~" conf/extra/httpd-ssl.conf
sed -i "s~KEY_PATH~${KEY_PATH}~" conf/extra/httpd-ssl.conf

exec "$@"
