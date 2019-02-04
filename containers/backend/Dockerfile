FROM centos:7

LABEL name="LessPass Backend" 
LABEL maintainer="LessPass <contact@lesspass.com>"

ENV LANG en_US.UTF-8

RUN yum -y install centos-release-scl && \
    yum -y install rh-python36 && \
    yum clean all

RUN mkdir /opt/app
WORKDIR /opt/app

RUN source scl_source enable rh-python36 && \
    python -m venv /opt/app/venv

COPY requirements.txt /opt/app/
RUN /opt/app/venv/bin/python -m pip install --upgrade pip  && \
    /opt/app/venv/bin/python -m pip install -r requirements.txt

COPY . /opt/app/

ENTRYPOINT ["/opt/app/entrypoint.sh"]

CMD ["/opt/app/venv/bin/gunicorn", "lesspass.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug", "--bind", "0.0.0.0:8000"]
