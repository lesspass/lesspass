FROM centos:7

MAINTAINER "LessPass <contact@lesspass.com>"

LABEL name="LessPass Web Server" 

RUN yum -y --setopt=tsflags=nodocs update && \
    yum -y --setopt=tsflags=nodocs install httpd mod_ssl openssl python python-jinja2 && \
    yum clean all

EXPOSE 80 443

ADD . /app
RUN chmod +x /app/entrypoint.sh

CMD ["/app/entrypoint.sh"]