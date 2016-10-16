FROM python:3.5-alpine

RUN apk add --no-cache supervisor netcat-openbsd postgresql-dev gcc python3-dev musl-dev

RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY api/ /backend/api/
COPY lesspass/ /backend/lesspass/
COPY manage.py /backend/manage.py

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
