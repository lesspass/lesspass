FROM centos:7

LABEL name="LessPass Web Server" 
LABEL maintainer="LessPass <contact@lesspass.com>"

ENV LANG en_US.UTF-8

RUN yum -y install epel-release && \
    yum -y install httpd openssl mod_ssl proxy_http python34 python34-pip && \
    yum clean all

EXPOSE 80 443

RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install jinja2

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]