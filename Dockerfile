FROM python:3.5

RUN mkdir /backend
WORKDIR /backend
RUN apt-get update && apt-get install -y \
    supervisor \
    netcat \
    && rm -rf /var/lib/apt/lists/*
ADD requirements.txt /backend/
RUN pip install -r requirements.txt
ADD . /backend/

COPY entrypoint.sh /
RUN chmod 755 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord"]
