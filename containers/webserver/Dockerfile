FROM httpd:2.4
LABEL maintainer="LessPass <contact@lesspass.com>"
LABEL name="LessPass Web Server"

COPY ./httpd-default.conf /usr/local/apache2/conf/extra/httpd-default.conf
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["httpd-foreground"]
