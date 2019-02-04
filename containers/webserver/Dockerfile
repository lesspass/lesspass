FROM centos:7

LABEL name="LessPass Web Server" 
LABEL maintainer="LessPass <contact@lesspass.com>"

ENV LANG en_US.UTF-8

RUN yum -y install centos-release-scl && \
    yum -y install httpd openssl mod_ssl proxy_http rh-python36 && \
    yum clean all

RUN mkdir /opt/app
WORKDIR /opt/app

RUN source scl_source enable rh-python36 && \
    python -m venv /opt/app/venv

RUN /opt/app/venv/bin/python -m pip install --upgrade pip  && \
    /opt/app/venv/bin/python -m pip install jinja2

COPY entrypoint.sh /opt/app/

EXPOSE 80 443

ENTRYPOINT ["/opt/app/entrypoint.sh"]

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]