FROM python:3.5

RUN mkdir /backend
WORKDIR /backend
RUN apt-get update && apt-get install -y \
    supervisor \
    netcat \
    && rm -rf /var/lib/apt/lists/*
ADD requirements.txt /backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ADD entrypoint.sh /backend/
RUN chmod 755 /backend/entrypoint.sh
ENTRYPOINT ["/backend/entrypoint.sh"]

ADD . /backend/

ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
