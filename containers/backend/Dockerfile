FROM centos:7

LABEL name="LessPass Web Server" 
LABEL maintainer="LessPass <contact@lesspass.com>"

ENV LANG en_US.UTF-8

RUN yum -y install epel-release && \
    yum -y install python34 python34-pip && \
    yum clean all

RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt

COPY api/ /backend/api/
COPY lesspass/ /backend/lesspass/
COPY manage.py /backend/manage.py
COPY wait_db.py /backend/wait_db.py

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]

CMD ["gunicorn", "lesspass.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug", "--bind", "0.0.0.0:8000"]