FROM python:3.5-alpine

RUN mkdir /backend
WORKDIR /backend
RUN apk update && apk upgrade
RUN apk add bash supervisor netcat-openbsd postgresql-dev gcc python3-dev musl-dev

ADD requirements.txt /backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD . /backend/

COPY entrypoint.sh /
RUN chmod 755 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
